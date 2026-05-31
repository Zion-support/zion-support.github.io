"""
V687 - Email Negotiation Intelligence Engine
=============================================
Detects, analyzes, and advises on email-based negotiations.

Features:
- Negotiation detection (is this email part of a negotiation?)
- Stage identification (opening, bargaining, closing, deadlock, agreement)
- Term extraction (price, timeline, deliverables, conditions)
- Leverage analysis for both parties
- Counter-offer and strategy suggestions
- BATNA (Best Alternative to Negotiated Agreement) analysis
- Reply-all enforcement for multi-party negotiations
"""

import re
import json
from typing import Dict, List, Optional, Tuple
from datetime import datetime, timedelta
from dataclasses import dataclass, field, asdict
from enum import Enum


class NegotiationStage(Enum):
    """Stages of a negotiation lifecycle."""
    PRE_NEGOTIATION = "pre_negotiation"
    OPENING = "opening"
    EXPLORATION = "exploration"
    BARGAINING = "bargaining"
    CLOSING = "closing"
    DEADLOCK = "deadlock"
    AGREEMENT = "agreement"
    RENEGOTIATION = "renegotiation"


class LeverageSource(Enum):
    """Sources of leverage in negotiation."""
    ALTERNATIVES = "alternatives"
    URGENCY = "urgency"
    INFORMATION = "information"
    RELATIONSHIP = "relationship"
    AUTHORITY = "authority"
    DEADLINE = "deadline"
    EXPERTISE = "expertise"
    RESOURCES = "resources"


class NegotiationTactic(Enum):
    """Common negotiation tactics."""
    ANCHORING = "anchoring"
    CONCESSION = "concession"
    BRINKMANSHIP = "brinkmanship"
    FRAMING = "framing"
    SILENCE = "silence"
    PACKAGING = "packaging"
    SPLITTING = "splitting"
    CONTINGENT = "contingent"
    RECIPROCAL = "reciprocal"
    WALK_AWAY = "walk_away"


@dataclass
class NegotiationTerm:
    """A single negotiable term extracted from email."""
    category: str  # price, timeline, deliverable, condition, warranty, etc.
    value: str
    proposed_by: str
    confidence: float
    flexibility: str  # rigid, moderate, flexible
    context: str = ""

    def to_dict(self) -> Dict:
        return asdict(self)


@dataclass
class LeveragePoint:
    """A leverage point for one party."""
    party: str
    source: LeverageSource
    strength: float  # 0.0 to 1.0
    description: str
    actionable: bool = True

    def to_dict(self) -> Dict:
        d = asdict(self)
        d["source"] = self.source.value
        return d


@dataclass
class CounterOffer:
    """A suggested counter-offer."""
    original_term: str
    counter_term: str
    rationale: str
    tactic: NegotiationTactic
    expected_outcome: str
    risk_level: str  # low, medium, high
    priority: int = 1

    def to_dict(self) -> Dict:
        d = asdict(self)
        d["tactic"] = self.tactic.value
        return d


@dataclass
class BATNAAnalysis:
    """BATNA (Best Alternative to Negotiated Agreement) analysis."""
    party: str
    batna_description: str
    strength: float  # 0.0 (weak) to 1.0 (strong)
    alternatives: List[str]
    walkaway_point: str
    improvement_suggestions: List[str]

    def to_dict(self) -> Dict:
        return asdict(self)


@dataclass
class NegotiationReport:
    """Complete negotiation intelligence report."""
    email_id: str
    is_negotiation: bool
    negotiation_score: float
    stage: NegotiationStage
    stage_confidence: float
    terms: List[NegotiationTerm]
    leverage_analysis: List[LeveragePoint]
    counter_offers: List[CounterOffer]
    batna_analysis: List[BATNAAnalysis]
    reply_all_required: bool
    reply_all_violations: List[str]
    strategy_recommendations: List[str]
    risk_assessment: str
    next_actions: List[str]
    tone_analysis: str
    urgency_level: str
    deadline_detected: Optional[str] = None

    def to_dict(self) -> Dict:
        d = {
            "email_id": self.email_id,
            "is_negotiation": self.is_negotiation,
            "negotiation_score": self.negotiation_score,
            "stage": self.stage.value,
            "stage_confidence": self.stage_confidence,
            "terms": [t.to_dict() for t in self.terms],
            "leverage_analysis": [l.to_dict() for l in self.leverage_analysis],
            "counter_offers": [c.to_dict() for c in self.counter_offers],
            "batna_analysis": [b.to_dict() for b in self.batna_analysis],
            "reply_all_required": self.reply_all_required,
            "reply_all_violations": self.reply_all_violations,
            "strategy_recommendations": self.strategy_recommendations,
            "risk_assessment": self.risk_assessment,
            "next_actions": self.next_actions,
            "tone_analysis": self.tone_analysis,
            "urgency_level": self.urgency_level,
            "deadline_detected": self.deadline_detected,
        }
        return d


class EmailNegotiationIntelligence:
    """
    V687 - Email Negotiation Intelligence Engine
    
    Analyzes email communications to detect negotiations, identify stages,
    extract terms, assess leverage, and suggest strategies.
    """

    # Keywords and patterns for negotiation detection
    NEGOTIATION_KEYWORDS = {
        "strong": [
            "offer", "counter-offer", "counteroffer", "negotiate", "negotiation",
            "proposal", "terms", "price", "discount", "bargain", "deal",
            "agreement", "contract", "quote", "bid", "tender",
            "pricing", "budget", "cost", "fee", "rate",
            "willing to", "would you accept", "can we discuss",
            "let me propose", "here's what I can", "best price",
            "final offer", "last offer", "take it or leave it",
            "meet in the middle", "split the difference",
            "walk away", "alternative", "deadline",
        ],
        "moderate": [
            "consider", "flexible", "adjust", "revise", "modify",
            "timeline", "schedule", "deliverable", "scope",
            "volume", "quantity", "duration", "warranty",
            "payment terms", "net 30", "net 60", "installment",
            "condition", "requirement", "expectation",
            "concession", "compromise", "middle ground",
            "if we could", "would it help if", "what if",
        ],
        "contextual": [
            "following up on", "as discussed", "per our conversation",
            "regarding the", "in reference to", "re:",
            "please advise", "your thoughts", "feedback",
            "moving forward", "next steps", "proceed",
        ],
    }

    STAGE_PATTERNS = {
        NegotiationStage.PRE_NEGOTIATION: [
            r"inquir(?:y|ing)", r"interested in", r"could you provide",
            r"what are your", r"availability", r"initial discussion",
            r"exploring (?:the )?possib", r"would like to know",
        ],
        NegotiationStage.OPENING: [
            r"(?:our |my )?(?:initial |opening )?offer",
            r"(?:we|I) (?:propose|suggest|would like)",
            r"(?:starting|opening) (?:point|position)",
            r"(?:here'?s|this is) (?:our |my )?(?:initial )?(?:proposal|offer|quote)",
            r"(?:please )?find (?:attached|below) (?:our )?(?:proposal|quote|pricing)",
        ],
        NegotiationStage.EXPLORATION: [
            r"what (?:if|would)", r"could (?:we|you) (?:consider|be flexible)",
            r"(?:interested in|open to) (?:discussing|exploring)",
            r"(?:help me|let me) understand",
            r"(?:your|their) (?:needs|requirements|priorities|constraints)",
            r"(?:options|alternatives|possibilities)",
        ],
        NegotiationStage.BARGAINING: [
            r"(?:counter[- ]?offer|counterproposal)", r"(?:we|I) (?:can|could) (?:do|offer|go)",
            r"(?:would|could) you (?:accept|consider|do)",
            r"(?:best|final|lowest|highest) (?:price|offer|number)",
            r"(?:meet|split) (?:in the middle|the difference|halfway)",
            r"(?:if you|if we) (?:can|could)", r"(?:concession|compromise)",
            r"(?:that works|that'?s (?:too|not) (?:much|enough))",
            r"(?:discount|reduction|increase)",
        ],
        NegotiationStage.CLOSING: [
            r"(?:final|last) (?:offer|proposal)", r"(?:ready|prepared) to (?:sign|proceed|commit)",
            r"(?:agreement|contract) (?:is|has been) (?:ready|prepared|drafted)",
            r"(?:let'?s|shall we) (?:finalize|close|seal|wrap up)",
            r"(?:send over|sign) the (?:contract|agreement|papers)",
            r"(?:deadline|expires?|valid until|good (?:through|until))",
            r"(?:this is (?:our|my) (?:final|best))",
        ],
        NegotiationStage.DEADLOCK: [
            r"(?:unable|cannot) (?:agree|accept|proceed)",
            r"(?:stuck|impasse|stalemate|deadlock)",
            r"(?:far apart|not (?:close|aligned))",
            r"(?:non[- ]?negotiable|firm|not (?:flexible|willing))",
            r"(?:disappointing|frustrat|concerned)",
            r"(?:reconsider|rethink|re-evaluate)",
            r"(?:at this (?:point|time)|as it stands)",
        ],
        NegotiationStage.AGREEMENT: [
            r"(?:agreed|accepted|approved|confirmed)",
            r"(?:we have a deal|it'?s a deal|sounds good)",
            r"(?:please (?:send|prepare|draft)) (?:the )?(?:contract|agreement)",
            r"(?:looking forward to) (?:working|partnering|proceeding)",
            r"(?:signed|executed)", r"(?:moving forward with)",
        ],
        NegotiationStage.RENEGOTIATION: [
            r"(?:revisit|re-?open|amend|modify) (?:the |our )?(?:agreement|contract|terms)",
            r"(?:circumstances have changed|given the (?:new|updated))",
            r"(?:need to (?:adjust|renegotiate|restructure))",
            r"(?:change order|amendment|addendum)",
        ],
    }

    PRICE_PATTERNS = [
        r'\$\s*[\d,]+(?:\.\d{2})?(?:\s*(?:per|/)\s*(?:unit|hour|month|year|item|piece|kg|lb))?',
        r'[\d,]+\s*(?:USD|EUR|GBP|JPY|CAD|AUD)',
        r'(?:price|cost|fee|rate|amount|total|budget|quote)\s*(?:of|is|:)?\s*\$?\s*[\d,]+(?:\.\d{2})?',
        r'(?:discount|reduction)\s*(?:of|:)?\s*\d+(?:\.\d+)?\s*%',
        r'\d+(?:\.\d+)?\s*%\s*(?:discount|off|reduction)',
        r'(?:net|payment)\s*(?:\d+|30|60|90)',
    ]

    TIMELINE_PATTERNS = [
        r'(?:by|within|before|after|until|deadline)\s+(?:the\s+)?(?:\d{1,2}(?:st|nd|rd|th)?\s+(?:of\s+)?(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*)',
        r'(?:\d+)\s*(?:days?|weeks?|months?|years?|hours?)',
        r'(?:Q[1-4]|quarter\s*[1-4])\s*\d{4}',
        r'(?:delivery|completion|start|launch|handover)\s*(?:date|by|in|within)',
        r'(?:ASAP|immediately|urgent|expedited)',
        r'\d{4}-\d{2}-\d{2}',
        r'(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\w*\s+\d{1,2}(?:st|nd|rd|th)?',
    ]

    DELIVERABLE_PATTERNS = [
        r'(?:deliver|provide|supply|ship|send|produce|create|build|develop)',
        r'(?:units?|pieces?|items?|batches?|lots?|quantit(?:y|ies))',
        r'(?:milestone|phase|stage|step)\s*\d*',
        r'(?:specification|requirement|feature|functionality)',
        r'(?:report|document|software|hardware|product|service)',
    ]

    URGENCY_INDICATORS = [
        r'(?:urgent|immediately|asap|right away|time[- ]?sensitive)',
        r'(?:need|require|must)\s+(?:by|before|within)',
        r'(?:deadline|cut[- ]?off|last chance|final opportunity)',
        r'(?:this week|today|tomorrow|by end of day)',
    ]

    def __init__(self):
        """Initialize the negotiation intelligence engine."""
        self._negotiation_history: Dict[str, List[Dict]] = {}
        self._party_profiles: Dict[str, Dict] = {}

    def detect_negotiation(self, email: Dict) -> Tuple[bool, float, Dict]:
        """
        Detect whether an email is part of a negotiation.
        
        Args:
            email: Dict with keys: subject, body, sender, recipients, cc, 
                   thread_history (optional list of previous emails)
                   
        Returns:
            Tuple of (is_negotiation, confidence_score, details)
        """
        subject = email.get("subject", "")
        body = email.get("body", "")
        full_text = f"{subject} {body}".lower()
        
        scores = {"strong": 0, "moderate": 0, "contextual": 0}
        matched_keywords = {"strong": [], "moderate": [], "contextual": []}
        
        # Check keyword matches
        for category, keywords in self.NEGOTIATION_KEYWORDS.items():
            for keyword in keywords:
                if re.search(r'\b' + re.escape(keyword) + r'\b', full_text, re.IGNORECASE):
                    scores[category] += 1
                    matched_keywords[category].append(keyword)
        
        # Check for price/monetary patterns
        price_matches = []
        for pattern in self.PRICE_PATTERNS:
            found = re.findall(pattern, full_text, re.IGNORECASE)
            price_matches.extend(found)
        
        # Check for timeline patterns
        timeline_matches = []
        for pattern in self.TIMELINE_PATTERNS:
            found = re.findall(pattern, full_text, re.IGNORECASE)
            timeline_matches.extend(found)
        
        # Check thread context
        thread_bonus = 0
        thread_history = email.get("thread_history", [])
        if thread_history:
            for prev_email in thread_history:
                prev_text = f"{prev_email.get('subject', '')} {prev_email.get('body', '')}".lower()
                for keyword in self.NEGOTIATION_KEYWORDS["strong"]:
                    if keyword in prev_text:
                        thread_bonus += 0.1
                        break
        
        # Check for multiple parties (CC'd)
        cc_count = len(email.get("cc", []))
        multi_party_bonus = 0.1 if cc_count > 0 else 0
        
        # Calculate final score
        raw_score = (
            scores["strong"] * 0.4 +
            scores["moderate"] * 0.2 +
            scores["contextual"] * 0.1 +
            min(len(price_matches) * 0.3, 1.0) +
            min(len(timeline_matches) * 0.15, 0.5) +
            thread_bonus +
            multi_party_bonus
        )
        
        # Normalize to 0-1
        negotiation_score = min(raw_score / 3.0, 1.0)
        is_negotiation = negotiation_score >= 0.25
        
        details = {
            "matched_strong_keywords": matched_keywords["strong"],
            "matched_moderate_keywords": matched_keywords["moderate"],
            "matched_contextual_keywords": matched_keywords["contextual"],
            "price_references": price_matches,
            "timeline_references": timeline_matches,
            "thread_context_bonus": thread_bonus,
            "multi_party": cc_count > 0,
            "score_breakdown": scores,
        }
        
        return is_negotiation, round(negotiation_score, 4), details

    def identify_stage(self, email: Dict) -> Tuple[NegotiationStage, float, List[str]]:
        """
        Identify the current negotiation stage.
        
        Returns:
            Tuple of (stage, confidence, evidence)
        """
        subject = email.get("subject", "")
        body = email.get("body", "")
        full_text = f"{subject} {body}"
        
        stage_scores = {}
        stage_evidence = {}
        
        for stage, patterns in self.STAGE_PATTERNS.items():
            matches = []
            for pattern in patterns:
                found = re.findall(pattern, full_text, re.IGNORECASE)
                matches.extend(found)
            stage_scores[stage] = len(matches)
            stage_evidence[stage] = matches
        
        # Consider thread history for stage progression
        thread_history = email.get("thread_history", [])
        if thread_history:
            # If there are many previous exchanges, we're likely past opening
            exchange_count = len(thread_history)
            if exchange_count >= 4:
                stage_scores[NegotiationStage.PRE_NEGOTIATION] = 0
                stage_scores[NegotiationStage.OPENING] = max(
                    stage_scores.get(NegotiationStage.OPENING, 0) - 2, 0
                )
                stage_scores[NegotiationStage.BARGAINING] = (
                    stage_scores.get(NegotiationStage.BARGAINING, 0) + 1
                )
            elif exchange_count >= 2:
                stage_scores[NegotiationStage.PRE_NEGOTIATION] = 0
        
        # Find best stage
        if not stage_scores or max(stage_scores.values()) == 0:
            # Default based on email characteristics
            if thread_history:
                return NegotiationStage.BARGAINING, 0.4, ["default: thread exists with no clear stage markers"]
            return NegotiationStage.PRE_NEGOTIATION, 0.3, ["default: no stage indicators found"]
        
        best_stage = max(stage_scores, key=stage_scores.get)
        total_score = sum(stage_scores.values())
        confidence = stage_scores[best_stage] / max(total_score, 1)
        confidence = min(confidence + 0.1, 1.0)  # Boost slightly for having any match
        
        evidence = stage_evidence.get(best_stage, [])
        
        return best_stage, round(confidence, 4), evidence

    def extract_terms(self, email: Dict) -> List[NegotiationTerm]:
        """
        Extract negotiation terms from the email.
        
        Returns:
            List of NegotiationTerm objects
        """
        subject = email.get("subject", "")
        body = email.get("body", "")
        full_text = f"{subject} {body}"
        sender = email.get("sender", "unknown")
        
        terms = []
        
        # Extract price/financial terms
        for pattern in self.PRICE_PATTERNS:
            matches = re.finditer(pattern, full_text, re.IGNORECASE)
            for match in matches:
                # Determine flexibility from context
                context_start = max(0, match.start() - 50)
                context_end = min(len(full_text), match.end() + 50)
                context = full_text[context_start:context_end]
                
                flexibility = self._assess_flexibility(context)
                
                terms.append(NegotiationTerm(
                    category="price",
                    value=match.group().strip(),
                    proposed_by=sender,
                    confidence=0.85,
                    flexibility=flexibility,
                    context=context.strip(),
                ))
        
        # Extract timeline terms
        for pattern in self.TIMELINE_PATTERNS:
            matches = re.finditer(pattern, full_text, re.IGNORECASE)
            for match in matches:
                context_start = max(0, match.start() - 50)
                context_end = min(len(full_text), match.end() + 50)
                context = full_text[context_start:context_end]
                
                flexibility = self._assess_flexibility(context)
                
                terms.append(NegotiationTerm(
                    category="timeline",
                    value=match.group().strip(),
                    proposed_by=sender,
                    confidence=0.8,
                    flexibility=flexibility,
                    context=context.strip(),
                ))
        
        # Extract deliverable terms
        deliverable_matches = re.finditer(
            r'(\d+)\s*(units?|pieces?|items?|batches?|lots?|licenses?|seats?)',
            full_text, re.IGNORECASE
        )
        for match in deliverable_matches:
            context_start = max(0, match.start() - 50)
            context_end = min(len(full_text), match.end() + 50)
            context = full_text[context_start:context_end]
            
            terms.append(NegotiationTerm(
                category="deliverable",
                value=match.group().strip(),
                proposed_by=sender,
                confidence=0.75,
                flexibility=self._assess_flexibility(context),
                context=context.strip(),
            ))
        
        # Extract conditions/warranties
        condition_patterns = [
            r'(?:warranty|guarantee)\s*(?:of|for|:)?\s*(\d+\s*(?:days?|months?|years?))',
            r'(?:support|maintenance)\s*(?:for|of|:)?\s*(\d+\s*(?:months?|years?))',
            r'(?:SLA|service level)\s*(?:of|:)?\s*([\d.]+\s*%)',
            r'(?:penalty|late fee)\s*(?:of|:)?\s*\$?\s*([\d,.]+(?:\s*%)?)',
        ]
        
        for pattern in condition_patterns:
            matches = re.finditer(pattern, full_text, re.IGNORECASE)
            for match in matches:
                context_start = max(0, match.start() - 30)
                context_end = min(len(full_text), match.end() + 30)
                context = full_text[context_start:context_end]
                
                category = "condition"
                if "warranty" in match.group().lower() or "guarantee" in match.group().lower():
                    category = "warranty"
                elif "support" in match.group().lower() or "maintenance" in match.group().lower():
                    category = "support"
                elif "sla" in match.group().lower() or "service level" in match.group().lower():
                    category = "sla"
                
                terms.append(NegotiationTerm(
                    category=category,
                    value=match.group().strip(),
                    proposed_by=sender,
                    confidence=0.7,
                    flexibility="rigid",
                    context=context.strip(),
                ))
        
        # Deduplicate terms by value
        seen_values = set()
        unique_terms = []
        for term in terms:
            val_key = term.value.lower()
            if val_key not in seen_values:
                seen_values.add(val_key)
                unique_terms.append(term)
        
        return unique_terms

    def assess_leverage(self, email: Dict, your_role: str = "recipient") -> List[LeveragePoint]:
        """
        Assess leverage points for both parties in the negotiation.
        
        Args:
            email: The email to analyze
            your_role: "sender" or "recipient" - which party you represent
            
        Returns:
            List of LeveragePoint objects for both parties
        """
        body = email.get("body", "")
        subject = email.get("subject", "")
        full_text = f"{subject} {body}".lower()
        
        sender = email.get("sender", "sender")
        recipients = email.get("recipients", [])
        cc = email.get("cc", [])
        
        leverage_points = []
        
        # --- Sender's leverage ---
        
        # Check if sender mentions alternatives/other options
        if re.search(r'(?:other (?:buyers|customers|clients|offers|parties)|competing|alternative)', full_text):
            leverage_points.append(LeveragePoint(
                party="sender",
                source=LeverageSource.ALTERNATIVES,
                strength=0.8,
                description="Sender references other potential parties/alternatives",
            ))
        
        # Check if sender imposes deadline
        deadline_patterns = [
            r'(?:offer|proposal|price|quote)\s*(?:is |)valid\s*(?:until|through|for)',
            r'(?:respond|reply|decide|accept)\s*by\s*',
            r'(?:expires?|ends?)\s*(?:on|at|by)?\s*',
        ]
        for pattern in deadline_patterns:
            if re.search(pattern, full_text):
                leverage_points.append(LeveragePoint(
                    party="sender",
                    source=LeverageSource.DEADLINE,
                    strength=0.7,
                    description="Sender has set a deadline or expiration",
                ))
                break
        
        # Check if sender shows urgency (reduces their leverage)
        if re.search(r'(?:we (?:really )?need|desperate|must have|cannot wait|asap|urgent)', full_text):
            leverage_points.append(LeveragePoint(
                party="recipient",
                source=LeverageSource.URGENCY,
                strength=0.75,
                description="Sender shows urgency, giving recipient leverage",
            ))
        
        # Check for volume/quantity leverage (buyer power)
        volume_match = re.search(r'(\d+)\s*(?:units?|pieces?|licenses?|seats?|items?)', full_text)
        if volume_match:
            qty = int(volume_match.group(1))
            if qty >= 100:
                leverage_points.append(LeveragePoint(
                    party="recipient" if your_role == "recipient" else "sender",
                    source=LeverageSource.RESOURCES,
                    strength=0.7,
                    description=f"Large volume order ({qty} units) provides buyer leverage",
                ))
        
        # Check for exclusivity mentions
        if re.search(r'(?:exclusive|sole|only (?:supplier|vendor|provider))', full_text):
            leverage_points.append(LeveragePoint(
                party="sender",
                source=LeverageSource.RELATIONSHIP,
                strength=0.8,
                description="Exclusivity arrangement provides sender leverage",
            ))
        
        # Check for expertise/uniqueness
        if re.search(r'(?:only|unique|proprietary|patented|specialized)', full_text):
            leverage_points.append(LeveragePoint(
                party="sender",
                source=LeverageSource.EXPERTISE,
                strength=0.75,
                description="Unique or specialized offering increases sender leverage",
            ))
        
        # --- Recipient's leverage ---
        
        # Check if recipient is mentioned as having alternatives
        if re.search(r'(?:looking at|evaluating|considering) (?:other|alternative|competing)', full_text):
            leverage_points.append(LeveragePoint(
                party="recipient",
                source=LeverageSource.ALTERNATIVES,
                strength=0.8,
                description="Recipient is evaluating alternatives",
            ))
        
        # Multi-party (CC'd) can indicate stakeholder authority
        if len(cc) > 2:
            leverage_points.append(LeveragePoint(
                party="recipient",
                source=LeverageSource.AUTHORITY,
                strength=0.6,
                description="Multiple stakeholders CC'd - decision requires consensus",
            ))
        
        # Long relationship history
        thread_history = email.get("thread_history", [])
        if len(thread_history) >= 5:
            leverage_points.append(LeveragePoint(
                party="both",
                source=LeverageSource.RELATIONSHIP,
                strength=0.5,
                description="Extended negotiation history indicates mutual investment",
            ))
        
        # Budget constraints mentioned
        if re.search(r'(?:budget|limited|constraint|cannot (?:afford|exceed))', full_text):
            leverage_points.append(LeveragePoint(
                party="sender",
                source=LeverageSource.INFORMATION,
                strength=0.6,
                description="Budget constraints revealed - sender can use this info",
            ))
        
        # If no leverage found, add baseline
        if not leverage_points:
            leverage_points.append(LeveragePoint(
                party="both",
                source=LeverageSource.INFORMATION,
                strength=0.3,
                description="Insufficient information to determine clear leverage advantage",
            ))
        
        return leverage_points

    def suggest_counter_offer(self, email: Dict, your_position: str = "recipient",
                              priorities: Optional[Dict[str, str]] = None) -> List[CounterOffer]:
        """
        Suggest counter-offers based on email analysis.
        
        Args:
            email: The email to analyze
            your_position: "sender" or "recipient"
            priorities: Dict of {term_category: "high"|"medium"|"low"} importance
            
        Returns:
            List of CounterOffer suggestions
        """
        terms = self.extract_terms(email)
        stage, _, _ = self.identify_stage(email)
        full_text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        counter_offers = []
        
        if priorities is None:
            priorities = {}
        
        for term in terms:
            if term.category == "price":
                counter = self._generate_price_counter(term, stage, full_text)
                if counter:
                    counter_offers.append(counter)
            
            elif term.category == "timeline":
                counter = self._generate_timeline_counter(term, stage, full_text)
                if counter:
                    counter_offers.append(counter)
            
            elif term.category == "deliverable":
                counter = self._generate_deliverable_counter(term, stage, full_text)
                if counter:
                    counter_offers.append(counter)
            
            elif term.category in ("warranty", "support", "sla"):
                counter = self._generate_condition_counter(term, stage, full_text)
                if counter:
                    counter_offers.append(counter)
        
        # Add packaging counter-offer if multiple terms
        if len(terms) >= 2:
            counter_offers.append(CounterOffer(
                original_term="Multiple individual terms",
                counter_term="Package deal: combine terms for mutual benefit",
                rationale="Packaging multiple issues creates value through trade-offs on different priorities",
                tactic=NegotiationTactic.PACKAGING,
                expected_outcome="Both parties gain on their highest-priority items",
                risk_level="low",
                priority=2,
            ))
        
        # Add contingent offer if deadlock stage
        if stage == NegotiationStage.DEADLOCK:
            counter_offers.append(CounterOffer(
                original_term="Current impasse",
                counter_term="Contingent agreement: 'If X happens, then Y terms apply'",
                rationale="Contingent contracts break deadlocks by addressing uncertainty",
                tactic=NegotiationTactic.CONTINGENT,
                expected_outcome="Breaks deadlock while protecting both parties from risk",
                risk_level="medium",
                priority=1,
            ))
        
        # Sort by priority
        counter_offers.sort(key=lambda x: x.priority)
        
        return counter_offers

    def analyze_batna(self, email: Dict, party: str = "recipient") -> BATNAAnalysis:
        """
        Analyze BATNA (Best Alternative to Negotiated Agreement) for a party.
        
        Args:
            email: The email to analyze
            party: "sender" or "recipient"
            
        Returns:
            BATNAAnalysis object
        """
        full_text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        alternatives = []
        improvement_suggestions = []
        walkaway_point = ""
        
        # Detect mentioned alternatives
        alt_patterns = [
            r'(?:other|alternative|competing)\s+(?:vendor|supplier|provider|offer|option|solution)',
            r'(?:looking|shopping|searching)\s+(?:elsewhere|around)',
            r'(?:in[- ]?house|internal|DIY|do it ourselves)',
            r'(?:competitor|market|industry)\s+(?:price|rate|standard)',
            r'(?:go with|choose|select)\s+(?:another|different)',
        ]
        
        for pattern in alt_patterns:
            matches = re.findall(pattern, full_text, re.IGNORECASE)
            alternatives.extend(matches)
        
        # Determine BATNA strength
        batna_strength = 0.3  # baseline
        
        if alternatives:
            batna_strength += 0.2 * min(len(alternatives), 3)
        
        # Check for market conditions
        if re.search(r'(?:market|competitive|commodity|standard)', full_text):
            batna_strength += 0.15
            alternatives.append("Market alternatives available")
        
        # Check for specialized/unique needs
        if re.search(r'(?:specialized|custom|unique|rare|proprietary)', full_text):
            batna_strength -= 0.2
            improvement_suggestions.append("Develop alternative suppliers or in-house capability")
        
        # Check urgency (weakens BATNA)
        if re.search(r'(?:urgent|immediately|asap|cannot wait|deadline)', full_text):
            batna_strength -= 0.15
            improvement_suggestions.append("Extend timeline to reduce urgency pressure")
        
        batna_strength = max(0.0, min(1.0, batna_strength))
        
        # Generate walkaway point
        terms = self.extract_terms(email)
        price_terms = [t for t in terms if t.category == "price"]
        if price_terms:
            walkaway_point = f"Any deal worse than the stated terms ({', '.join(t.value for t in price_terms)}) may warrant walking away"
        else:
            walkaway_point = "Define clear thresholds before continuing: maximum price, minimum timeline, required deliverables"
        
        # General improvement suggestions
        if party == "recipient":
            improvement_suggestions.extend([
                "Research competitor pricing and offerings",
                "Identify 2-3 alternative suppliers before next response",
                "Assess internal capability to build/solve without this vendor",
                "Calculate true cost of delay vs. accepting unfavorable terms",
            ])
        else:
            improvement_suggestions.extend([
                "Identify other potential buyers/customers for this offering",
                "Develop tiered pricing to serve different market segments",
                "Strengthen unique value proposition to reduce price sensitivity",
                "Build case studies demonstrating ROI to justify premium pricing",
            ])
        
        batna_desc = f"{'Strong' if batna_strength > 0.6 else 'Moderate' if batna_strength > 0.4 else 'Weak'} BATNA"
        if alternatives:
            batna_desc += f" - Alternatives identified: {', '.join(alternatives[:3])}"
        else:
            batna_desc += " - No clear alternatives detected in communication"
        
        return BATNAAnalysis(
            party=party,
            batna_description=batna_desc,
            strength=round(batna_strength, 2),
            alternatives=alternatives if alternatives else ["No alternatives mentioned - consider developing options"],
            walkaway_point=walkaway_point,
            improvement_suggestions=improvement_suggestions,
        )

    def check_reply_all_compliance(self, email: Dict) -> Tuple[bool, List[str]]:
        """
        Check if reply-all is required and detect violations.
        
        In negotiations, all parties must be kept in the loop to maintain
        transparency and avoid side-deal accusations.
        
        Returns:
            Tuple of (reply_all_required, violations)
        """
        recipients = email.get("recipients", [])
        cc = email.get("cc", [])
        bcc = email.get("bcc", [])
        thread_history = email.get("thread_history", [])
        
        violations = []
        reply_all_required = False
        
        # Determine if this is a multi-party negotiation
        all_parties = set(recipients + cc)
        
        # Check thread history for all involved parties
        thread_parties = set()
        if thread_history:
            for prev_email in thread_history:
                thread_parties.add(prev_email.get("sender", ""))
                thread_parties.update(prev_email.get("recipients", []))
                thread_parties.update(prev_email.get("cc", []))
        
        # If multiple parties in thread, reply-all is required
        if len(thread_parties) > 2:
            reply_all_required = True
            
            # Check if current email drops anyone from the thread
            current_parties = set(recipients + cc + [email.get("sender", "")])
            dropped_parties = thread_parties - current_parties - {""}
            
            if dropped_parties:
                violations.append(
                    f"REPLY-ALL VIOLATION: {len(dropped_parties)} party(ies) dropped from "
                    f"negotiation thread: {', '.join(dropped_parties)}"
                )
        
        # Check for BCC usage (transparency concern in negotiations)
        if bcc:
            violations.append(
                f"TRANSPARENCY WARNING: BCC recipients detected ({len(bcc)}). "
                f"BCC in negotiations can undermine trust."
            )
            reply_all_required = True
        
        # Check for side-channel indicators
        body = email.get("body", "").lower()
        side_channel_patterns = [
            r'(?:off the record|between us|don\'t share|confidential|private)',
            r'(?:separate(?:ly)?|side|back[- ]?channel)',
        ]
        for pattern in side_channel_patterns:
            if re.search(pattern, body):
                violations.append(
                    "SIDE-CHANNEL WARNING: Email contains language suggesting "
                    "private communication outside main negotiation thread."
                )
                reply_all_required = True
                break
        
        # Multi-stakeholder check
        if len(cc) >= 2:
            reply_all_required = True
        
        return reply_all_required, violations

    def generate_negotiation_report(self, email: Dict, your_role: str = "recipient",
                                     priorities: Optional[Dict[str, str]] = None) -> NegotiationReport:
        """
        Generate a comprehensive negotiation intelligence report.
        
        Args:
            email: Dict with email content
            your_role: "sender" or "recipient"
            priorities: Optional dict of term priorities
            
        Returns:
            NegotiationReport object
        """
        email_id = email.get("id", f"email_{datetime.now().strftime('%Y%m%d%H%M%S')}")
        
        # Core analysis
        is_negotiation, negotiation_score, detection_details = self.detect_negotiation(email)
        stage, stage_confidence, stage_evidence = self.identify_stage(email)
        terms = self.extract_terms(email)
        leverage = self.assess_leverage(email, your_role)
        counter_offers = self.suggest_counter_offer(email, your_role, priorities)
        reply_all_required, reply_all_violations = self.check_reply_all_compliance(email)
        
        # BATNA for both parties
        batna_yours = self.analyze_batna(email, party=your_role)
        other_party = "sender" if your_role == "recipient" else "recipient"
        batna_theirs = self.analyze_batna(email, party=other_party)
        
        # Strategy recommendations
        strategy_recs = self._generate_strategy_recommendations(
            stage, leverage, terms, negotiation_score, batna_yours
        )
        
        # Risk assessment
        risk_assessment = self._assess_risk(stage, leverage, batna_yours, terms)
        
        # Next actions
        next_actions = self._suggest_next_actions(stage, terms, counter_offers, reply_all_required)
        
        # Tone analysis
        tone = self._analyze_tone(email)
        
        # Urgency
        urgency = self._detect_urgency(email)
        
        # Deadline detection
        deadline = self._detect_deadline(email)
        
        report = NegotiationReport(
            email_id=email_id,
            is_negotiation=is_negotiation,
            negotiation_score=negotiation_score,
            stage=stage,
            stage_confidence=stage_confidence,
            terms=terms,
            leverage_analysis=leverage,
            counter_offers=counter_offers,
            batna_analysis=[batna_yours, batna_theirs],
            reply_all_required=reply_all_required,
            reply_all_violations=reply_all_violations,
            strategy_recommendations=strategy_recs,
            risk_assessment=risk_assessment,
            next_actions=next_actions,
            tone_analysis=tone,
            urgency_level=urgency,
            deadline_detected=deadline,
        )
        
        return report

    # ---- Private helper methods ----

    def _assess_flexibility(self, context: str) -> str:
        """Assess how flexible a term appears from its context."""
        rigid_words = ["firm", "final", "non-negotiable", "must", "require", "fixed", "absolute"]
        flexible_words = ["approximate", "flexible", "open to", "negotiable", "around", "roughly", "about"]
        
        context_lower = context.lower()
        rigid_score = sum(1 for w in rigid_words if w in context_lower)
        flex_score = sum(1 for w in flexible_words if w in context_lower)
        
        if rigid_score > flex_score:
            return "rigid"
        elif flex_score > rigid_score:
            return "flexible"
        return "moderate"

    def _generate_price_counter(self, term: NegotiationTerm, stage: NegotiationStage,
                                 full_text: str) -> Optional[CounterOffer]:
        """Generate a counter-offer for a price term."""
        # Try to extract numeric value
        price_match = re.search(r'\$?\s*([\d,]+(?:\.\d+)?)', term.value)
        if not price_match:
            return None
        
        price_str = price_match.group(1).replace(",", "")
        try:
            price_val = float(price_str)
        except ValueError:
            return None
        
        # Determine counter based on stage
        if stage == NegotiationStage.OPENING:
            # Opening stage: anchor with aggressive counter
            counter_pct = 0.80  # 20% below
            tactic = NegotiationTactic.ANCHORING
            risk = "medium"
            rationale = "Opening with a lower anchor creates room for concession while showing serious intent"
        elif stage == NegotiationStage.BARGAINING:
            # Bargaining: split the difference
            counter_pct = 0.90  # 10% below
            tactic = NegotiationTactic.SPLITTING
            risk = "low"
            rationale = "Mid-negotiation counter proposes splitting the gap to reach agreement"
        elif stage == NegotiationStage.CLOSING:
            # Closing: small concession
            counter_pct = 0.95  # 5% below
            tactic = NegotiationTactic.CONCESSION
            risk = "low"
            rationale = "Near closing, small counter shows good faith while extracting final value"
        else:
            counter_pct = 0.85
            tactic = NegotiationTactic.FRAMING
            risk = "medium"
            rationale = "Counter-offer frames the negotiation around a more favorable reference point"
        
        counter_val = price_val * counter_pct
        counter_formatted = f"${counter_val:,.2f}" if counter_val >= 1 else f"${counter_val:.4f}"
        
        return CounterOffer(
            original_term=term.value,
            counter_term=f"Counter at {counter_formatted} ({int((1-counter_pct)*100)}% reduction)",
            rationale=rationale,
            tactic=tactic,
            expected_outcome=f"Likely settle between {counter_formatted} and {term.value}",
            risk_level=risk,
            priority=1,
        )

    def _generate_timeline_counter(self, term: NegotiationTerm, stage: NegotiationStage,
                                    full_text: str) -> Optional[CounterOffer]:
        """Generate a counter-offer for a timeline term."""
        return CounterOffer(
            original_term=term.value,
            counter_term="Propose extended timeline with milestone-based delivery",
            rationale="Extending timeline while offering phased delivery reduces risk for both parties",
            tactic=NegotiationTactic.PACKAGING,
            expected_outcome="More realistic timeline with incremental value delivery",
            risk_level="low",
            priority=2,
        )

    def _generate_deliverable_counter(self, term: NegotiationTerm, stage: NegotiationStage,
                                       full_text: str) -> Optional[CounterOffer]:
        """Generate a counter-offer for a deliverable term."""
        return CounterOffer(
            original_term=term.value,
            counter_term="Adjust quantity with tiered pricing or phased delivery",
            rationale="Volume adjustments paired with pricing tiers create mutual value",
            tactic=NegotiationTactic.RECIPROCAL,
            expected_outcome="Optimized quantity that balances cost efficiency with need",
            risk_level="low",
            priority=2,
        )

    def _generate_condition_counter(self, term: NegotiationTerm, stage: NegotiationStage,
                                     full_text: str) -> Optional[CounterOffer]:
        """Generate a counter-offer for a condition/warranty term."""
        return CounterOffer(
            original_term=term.value,
            counter_term="Extend coverage period or add performance guarantees",
            rationale="Stronger conditions reduce risk and may justify price concessions from other party",
            tactic=NegotiationTactic.CONTINGENT,
            expected_outcome="Better protection with potential to trade against price",
            risk_level="low",
            priority=3,
        )

    def _generate_strategy_recommendations(self, stage: NegotiationStage,
                                            leverage: List[LeveragePoint],
                                            terms: List[NegotiationTerm],
                                            score: float,
                                            batna: BATNAAnalysis) -> List[str]:
        """Generate strategic recommendations based on full analysis."""
        recommendations = []
        
        # Stage-specific strategies
        if stage == NegotiationStage.OPENING:
            recommendations.extend([
                "Set ambitious but credible opening position - anchor high",
                "Focus on understanding their priorities before making concessions",
                "Establish rapport and frame the negotiation as collaborative",
            ])
        elif stage == NegotiationStage.EXPLORATION:
            recommendations.extend([
                "Ask open-ended questions to uncover hidden interests",
                "Share information strategically - reveal less than you learn",
                "Identify potential trade-offs across different terms",
            ])
        elif stage == NegotiationStage.BARGAINING:
            recommendations.extend([
                "Make concessions slowly and always get something in return",
                "Use conditional language: 'If you can X, then we could Y'",
                "Package issues together rather than negotiating one at a time",
            ])
        elif stage == NegotiationStage.CLOSING:
            recommendations.extend([
                "Summarize agreed terms to prevent backsliding",
                "Use deadline or scarcity to create momentum toward close",
                "Offer small final concession to break remaining impasse",
            ])
        elif stage == NegotiationStage.DEADLOCK:
            recommendations.extend([
                "Introduce new issues or reframe existing ones",
                "Consider bringing in a mediator or senior stakeholder",
                "Propose contingent agreements to address uncertainty",
                "Take a break and return with fresh perspective",
            ])
        elif stage == NegotiationStage.AGREEMENT:
            recommendations.extend([
                "Document all agreed terms in writing immediately",
                "Verify no ambiguities remain before signing",
                "Establish clear implementation timeline and accountability",
            ])
        
        # Leverage-based recommendations
        sender_leverage = [l for l in leverage if l.party == "sender"]
        recipient_leverage = [l for l in leverage if l.party == "recipient"]
        
        if len(sender_leverage) > len(recipient_leverage):
            recommendations.append("You have a leverage advantage - use it strategically without overplaying")
        elif len(recipient_leverage) > len(sender_leverage):
            recommendations.append("Other party has stronger leverage - focus on creating mutual value")
        
        # BATNA-based
        if batna.strength > 0.6:
            recommendations.append("Strong BATNA gives you confidence to hold firm on key terms")
        elif batna.strength < 0.4:
            recommendations.append("Weak BATNA - prioritize improving alternatives before making commitments")
        
        return recommendations

    def _assess_risk(self, stage: NegotiationStage, leverage: List[LeveragePoint],
                      batna: BATNAAnalysis, terms: List[NegotiationTerm]) -> str:
        """Assess overall negotiation risk."""
        risk_factors = []
        
        if stage == NegotiationStage.DEADLOCK:
            risk_factors.append("Deadlock increases risk of deal collapse")
        
        if batna.strength < 0.3:
            risk_factors.append("Weak alternatives limit walk-away ability")
        
        rigid_terms = [t for t in terms if t.flexibility == "rigid"]
        if len(rigid_terms) > len(terms) / 2:
            risk_factors.append("Many rigid terms reduce room for compromise")
        
        high_leverage_opponent = [l for l in leverage if l.party == "sender" and l.strength > 0.7]
        if len(high_leverage_opponent) >= 2:
            risk_factors.append("Opponent holds multiple strong leverage points")
        
        if not risk_factors:
            return "LOW RISK - Negotiation appears balanced with room for mutual agreement"
        elif len(risk_factors) <= 2:
            return f"MEDIUM RISK - {'; '.join(risk_factors)}"
        else:
            return f"HIGH RISK - {'; '.join(risk_factors)}"

    def _suggest_next_actions(self, stage: NegotiationStage, terms: List[NegotiationTerm],
                               counter_offers: List[CounterOffer],
                               reply_all_required: bool) -> List[str]:
        """Suggest immediate next actions."""
        actions = []
        
        if reply_all_required:
            actions.append("⚠️ USE REPLY-ALL to maintain transparency with all parties")
        
        if stage == NegotiationStage.OPENING:
            actions.extend([
                "Research counterparty's position and constraints",
                "Prepare detailed counter-proposal addressing key terms",
                "Schedule call to discuss before responding in writing",
            ])
        elif stage in (NegotiationStage.BARGAINING, NegotiationStage.EXPLORATION):
            actions.extend([
                "Prioritize terms by importance and identify trade-offs",
                "Prepare conditional concession: offer X if they agree to Y",
                "Document all positions and concessions made so far",
            ])
        elif stage == NegotiationStage.CLOSING:
            actions.extend([
                "Review all terms for completeness before agreeing",
                "Prepare contract/agreement draft for quick execution",
                "Confirm implementation readiness on your side",
            ])
        elif stage == NegotiationStage.DEADLOCK:
            actions.extend([
                "Escalate to senior decision-maker if appropriate",
                "Propose creative alternatives or contingent terms",
                "Consider pausing negotiation to reset dynamics",
            ])
        else:
            actions.extend([
                "Acknowledge receipt and set expectations for response timeline",
                "Identify key terms requiring internal discussion",
            ])
        
        if counter_offers:
            actions.append(f"Review {len(counter_offers)} suggested counter-offers before responding")
        
        return actions

    def _analyze_tone(self, email: Dict) -> str:
        """Analyze the tone of the negotiation email."""
        body = email.get("body", "").lower()
        
        aggressive_patterns = [
            "demand", "unacceptable", "final", "or else", "immediately",
            "disappointed", "frustrated", "outrageous", "ridiculous"
        ]
        collaborative_patterns = [
            "together", "mutual", "partnership", "collaborate", "work with",
            "understand", "flexible", "open to", "appreciate", "thank"
        ]
        formal_patterns = [
            "hereby", "pursuant", "formally", "respectfully", "duly",
            "aforementioned", "stipulated", "stipulation"
        ]
        
        aggressive_score = sum(1 for p in aggressive_patterns if p in body)
        collaborative_score = sum(1 for p in collaborative_patterns if p in body)
        formal_score = sum(1 for p in formal_patterns if p in body)
        
        scores = {
            "aggressive": aggressive_score,
            "collaborative": collaborative_score,
            "formal": formal_score,
        }
        
        dominant = max(scores, key=scores.get)
        
        if scores[dominant] == 0:
            return "Neutral/professional tone"
        
        tone_descriptions = {
            "aggressive": "Aggressive/assertive tone - may indicate pressure tactics or frustration",
            "collaborative": "Collaborative/constructive tone - signals willingness to find mutual value",
            "formal": "Formal/legalistic tone - suggests involvement of legal counsel or strict positions",
        }
        
        return tone_descriptions.get(dominant, "Mixed tone")

    def _detect_urgency(self, email: Dict) -> str:
        """Detect urgency level of the email."""
        full_text = f"{email.get('subject', '')} {email.get('body', '')}".lower()
        
        high_urgency = ["urgent", "immediately", "asap", "today", "critical", "emergency"]
        medium_urgency = ["this week", "soon", "shortly", "promptly", "by friday", "by monday"]
        low_urgency = ["when convenient", "no rush", "at your earliest", "flexible timing"]
        
        high_score = sum(1 for p in high_urgency if p in full_text)
        medium_score = sum(1 for p in medium_urgency if p in full_text)
        low_score = sum(1 for p in low_urgency if p in full_text)
        
        if high_score >= 2:
            return "HIGH"
        elif high_score >= 1 or medium_score >= 2:
            return "MEDIUM"
        elif low_score >= 1:
            return "LOW"
        return "NORMAL"

    def _detect_deadline(self, email: Dict) -> Optional[str]:
        """Detect if a specific deadline is mentioned."""
        full_text = f"{email.get('subject', '')} {email.get('body', '')}"
        
        deadline_patterns = [
            r'(?:valid|good)\s*(?:until|through)\s+([\w\s,]+\d{4})',
            r'(?:respond|reply|decide|accept)\s*by\s+([\w\s,]+\d{4})',
            r'(?:deadline|due|expires?)\s*(?:is|:)?\s*([\w\s,]+\d{4})',
            r'(?:offer|proposal|quote)\s*expires?\s*(?:on)?\s*([\w\s,]+\d{4})',
        ]
        
        for pattern in deadline_patterns:
            match = re.search(pattern, full_text, re.IGNORECASE)
            if match:
                return match.group(1).strip()
        
        return None


def test_v687():
    """Test the V687 Email Negotiation Intelligence Engine."""
    engine = EmailNegotiationIntelligence()
    
    print("=" * 70)
    print("V687 - Email Negotiation Intelligence Engine - Test Suite")
    print("=" * 70)
    
    # Test 1: Buyer negotiating with vendor (bargaining stage)
    print("\n--- Test 1: Buyer Negotiating with Vendor (Bargaining) ---")
    buyer_email = {
        "id": "test_001",
        "subject": "Re: Software License Proposal - Counter-offer",
        "body": """Hi Sarah,
        
        Thank you for the revised proposal. However, $45,000 per year for 50 seats 
        is still above our budget. We've been evaluating competing solutions and 
        CompetitorX is offering similar functionality at $35,000 per year.
        
        Here's what we can offer:
        - $38,000 per year for 50 licenses
        - 2-year commitment (instead of 1 year)
        - Net 60 payment terms
        - Implementation to be completed within 60 days
        
        We need to make a decision by March 15, 2026 as our current system contract 
        expires on April 1st. Please respond by end of week.
        
        If you can meet us at $38K, we're prepared to sign immediately.
        
        Best regards,
        Mike Thompson
        VP of Technology, Acme Corp""",
        "sender": "mike.thompson@acmecorp.com",
        "recipients": ["sarah.johnson@softwarevendor.com"],
        "cc": ["cfo@acmecorp.com", "legal@acmecorp.com", "procurement@acmecorp.com"],
        "bcc": [],
        "thread_history": [
            {
                "sender": "sarah.johnson@softwarevendor.com",
                "subject": "Software License Proposal",
                "body": "Please find our initial proposal at $50,000/year for 50 seats.",
                "recipients": ["mike.thompson@acmecorp.com"],
                "cc": ["sales.manager@softwarevendor.com"],
            },
            {
                "sender": "mike.thompson@acmecorp.com",
                "subject": "Re: Software License Proposal",
                "body": "The price seems high. Can you provide a discount?",
                "recipients": ["sarah.johnson@softwarevendor.com"],
                "cc": ["cfo@acmecorp.com"],
            },
            {
                "sender": "sarah.johnson@softwarevendor.com",
                "subject": "Re: Software License Proposal - Revised",
                "body": "We've revised our offer to $45,000/year. This is a 10% discount.",
                "recipients": ["mike.thompson@acmecorp.com"],
                "cc": ["sales.manager@softwarevendor.com"],
            },
        ],
    }
    
    report1 = engine.generate_negotiation_report(buyer_email, your_role="sender")
    print(f"  Is Negotiation: {report1.is_negotiation}")
    print(f"  Negotiation Score: {report1.negotiation_score}")
    print(f"  Stage: {report1.stage.value} (confidence: {report1.stage_confidence})")
    print(f"  Terms Found: {len(report1.terms)}")
    for term in report1.terms:
        print(f"    - [{term.category}] {term.value} (flexibility: {term.flexibility})")
    print(f"  Leverage Points: {len(report1.leverage_analysis)}")
    for lev in report1.leverage_analysis:
        print(f"    - [{lev.party}] {lev.source.value}: {lev.description} (strength: {lev.strength})")
    print(f"  Counter-offers: {len(report1.counter_offers)}")
    for co in report1.counter_offers:
        print(f"    - {co.counter_term} ({co.tactic.value}, risk: {co.risk_level})")
    print(f"  Reply-All Required: {report1.reply_all_required}")
    print(f"  Reply-All Violations: {report1.reply_all_violations}")
    print(f"  Urgency: {report1.urgency_level}")
    print(f"  Deadline: {report1.deadline_detected}")
    print(f"  Tone: {report1.tone_analysis}")
    print(f"  Risk: {report1.risk_assessment}")
    print(f"  Strategy Recommendations:")
    for rec in report1.strategy_recommendations[:3]:
        print(f"    - {rec}")
    print(f"  BATNA (yours): {report1.batna_analysis[0].batna_description}")
    print(f"  BATNA Strength: {report1.batna_analysis[0].strength}")
    
    assert report1.is_negotiation == True, "Should detect negotiation"
    assert report1.negotiation_score > 0.5, "Should have high negotiation score"
    assert len(report1.terms) >= 3, "Should extract multiple terms"
    assert report1.reply_all_required == True, "Should require reply-all with multiple CC'd parties"
    print("  ✓ Test 1 PASSED")
    
    # Test 2: Seller responding (closing stage)
    print("\n--- Test 2: Seller Response (Closing Stage) ---")
    seller_email = {
        "id": "test_002",
        "subject": "Re: Software License Proposal - Final Offer",
        "body": """Hi Mike,
        
        I appreciate your counter-offer. After discussing with our leadership team,
        here is our final offer:
        
        - $40,000 per year for 50 licenses (15% discount from original)
        - 2-year commitment accepted
        - Net 45 payment terms (we cannot go to Net 60)
        - Implementation within 45 days with dedicated support
        - 12-month warranty included
        - 99.9% SLA guarantee
        
        This offer is valid until March 10, 2026. After that, pricing reverts to 
        our standard rate of $50,000.
        
        I believe this meets your core requirements. Shall I prepare the agreement 
        for signature?
        
        Best regards,
        Sarah Johnson
        Senior Account Executive""",
        "sender": "sarah.johnson@softwarevendor.com",
        "recipients": ["mike.thompson@acmecorp.com"],
        "cc": ["cfo@acmecorp.com", "legal@acmecorp.com", "procurement@acmecorp.com",
               "sales.manager@softwarevendor.com"],
        "bcc": [],
        "thread_history": buyer_email["thread_history"] + [buyer_email],
    }
    
    report2 = engine.generate_negotiation_report(seller_email, your_role="recipient")
    print(f"  Is Negotiation: {report2.is_negotiation}")
    print(f"  Negotiation Score: {report2.negotiation_score}")
    print(f"  Stage: {report2.stage.value} (confidence: {report2.stage_confidence})")
    print(f"  Terms Found: {len(report2.terms)}")
    for term in report2.terms:
        print(f"    - [{term.category}] {term.value}")
    print(f"  Deadline: {report2.deadline_detected}")
    print(f"  Risk: {report2.risk_assessment}")
    print(f"  Next Actions:")
    for action in report2.next_actions[:3]:
        print(f"    - {action}")
    
    assert report2.is_negotiation == True, "Should detect negotiation"
    assert report2.negotiation_score > 0.4, "Should have strong score"
    print("  ✓ Test 2 PASSED")
    
    # Test 3: Non-negotiation email
    print("\n--- Test 3: Non-Negotiation Email ---")
    regular_email = {
        "id": "test_003",
        "subject": "Team Meeting Tomorrow",
        "body": """Hi team,
        
        Just a reminder that we have our weekly standup tomorrow at 10am.
        Please prepare your status updates.
        
        Thanks,
        Dave""",
        "sender": "dave@company.com",
        "recipients": ["team@company.com"],
        "cc": [],
        "bcc": [],
        "thread_history": [],
    }
    
    report3 = engine.generate_negotiation_report(regular_email)
    print(f"  Is Negotiation: {report3.is_negotiation}")
    print(f"  Negotiation Score: {report3.negotiation_score}")
    print(f"  Stage: {report3.stage.value}")
    
    assert report3.is_negotiation == False, "Should NOT detect negotiation"
    assert report3.negotiation_score < 0.25, "Should have low score"
    print("  ✓ Test 3 PASSED")
    
    # Test 4: Opening stage inquiry
    print("\n--- Test 4: Opening Stage (Initial Inquiry) ---")
    opening_email = {
        "id": "test_004",
        "subject": "Inquiry: Bulk Order Pricing for Industrial Components",
        "body": """Dear Sales Team,
        
        We are interested in your product line and would like to inquire about
        bulk pricing for an initial order of 500 units of Model X-200.
        
        Could you provide a quote including:
        - Unit pricing for 500 units
        - Delivery timeline
        - Volume discounts for future orders of 1000+ units
        - Payment terms
        
        We are also exploring options with a few other suppliers to ensure
        competitive pricing.
        
        Looking forward to your proposal.
        
        Best,
        Jennifer Wu
        Procurement Manager, GlobalMfg Inc.""",
        "sender": "jennifer.wu@globalmfg.com",
        "recipients": ["sales@componentsupplier.com"],
        "cc": ["supply.chain@globalmfg.com"],
        "bcc": [],
        "thread_history": [],
    }
    
    report4 = engine.generate_negotiation_report(opening_email, your_role="recipient")
    print(f"  Is Negotiation: {report4.is_negotiation}")
    print(f"  Negotiation Score: {report4.negotiation_score}")
    print(f"  Stage: {report4.stage.value} (confidence: {report4.stage_confidence})")
    print(f"  Terms Found: {len(report4.terms)}")
    for term in report4.terms:
        print(f"    - [{term.category}] {term.value}")
    print(f"  BATNA: {report4.batna_analysis[0].batna_description}")
    print(f"  BATNA Strength: {report4.batna_analysis[0].strength}")
    
    assert report4.is_negotiation == True, "Should detect as negotiation"
    print("  ✓ Test 4 PASSED")
    
    # Test 5: Deadlock scenario
    print("\n--- Test 5: Deadlock Scenario ---")
    deadlock_email = {
        "id": "test_005",
        "subject": "Re: Contract Terms - Unable to Proceed",
        "body": """Robert,
        
        I'm afraid we are unable to accept the terms as proposed. The price of 
        $120,000 is non-negotiable on our end - this is our firm position.
        
        At this point, we seem far apart on the key issues:
        - Your budget cap of $85,000 vs. our minimum of $120,000
        - Your required 30-day delivery vs. our standard 90-day lead time
        - Your demand for unlimited support vs. our standard 8x5 coverage
        
        I'm disappointed we haven't been able to find common ground after 
        several weeks of discussion. Unless there's flexibility on your side,
        we may need to reconsider whether this partnership is viable.
        
        I'm open to one final conversation if you're willing to revisit 
        your position.
        
        Regards,
        David Chen
        CEO, PremiumTech Solutions""",
        "sender": "david.chen@premiumtech.com",
        "recipients": ["robert.martinez@startup.com"],
        "cc": ["board@startup.com", "legal@premiumtech.com"],
        "bcc": [],
        "thread_history": [
            {"sender": "robert.martinez@startup.com", "body": "We need to discuss terms.", 
             "recipients": ["david.chen@premiumtech.com"], "cc": []},
            {"sender": "david.chen@premiumtech.com", "body": "Our proposal is $120K.",
             "recipients": ["robert.martinez@startup.com"], "cc": []},
            {"sender": "robert.martinez@startup.com", "body": "Our budget is $85K max.",
             "recipients": ["david.chen@premiumtech.com"], "cc": []},
        ],
    }
    
    report5 = engine.generate_negotiation_report(deadlock_email, your_role="recipient")
    print(f"  Is Negotiation: {report5.is_negotiation}")
    print(f"  Negotiation Score: {report5.negotiation_score}")
    print(f"  Stage: {report5.stage.value} (confidence: {report5.stage_confidence})")
    print(f"  Terms Found: {len(report5.terms)}")
    for term in report5.terms:
        print(f"    - [{term.category}] {term.value} (flex: {term.flexibility})")
    print(f"  Risk: {report5.risk_assessment}")
    print(f"  Strategy:")
    for rec in report5.strategy_recommendations[:4]:
        print(f"    - {rec}")
    print(f"  BATNA: {report5.batna_analysis[0].batna_description}")
    print(f"  BATNA Strength: {report5.batna_analysis[0].strength}")
    
    assert report5.is_negotiation == True, "Should detect negotiation"
    assert report5.negotiation_score > 0.5, "Should have high score"
    print("  ✓ Test 5 PASSED")
    
    # Test 6: Reply-all violation detection
    print("\n--- Test 6: Reply-All Violation ---")
    reply_all_email = {
        "id": "test_006",
        "subject": "Re: Partnership Agreement - Private Note",
        "body": """Hey Tom,
        
        Between us, I think we can go lower than what we told them. Don't share 
        this with the group yet, but I'm thinking we could accept $25,000 if they 
        push back. Let me know your thoughts off the record.
        
        -Alex""",
        "sender": "alex@consulting.com",
        "recipients": ["tom@consulting.com"],
        "cc": [],  # Missing the other negotiation party!
        "bcc": [],
        "thread_history": [
            {"sender": "client@bigcorp.com", "body": "Let's discuss pricing.",
             "recipients": ["alex@consulting.com", "tom@consulting.com"], "cc": ["legal@bigcorp.com"]},
            {"sender": "alex@consulting.com", "body": "Our rate is $35,000.",
             "recipients": ["client@bigcorp.com"], "cc": ["tom@consulting.com", "legal@bigcorp.com"]},
        ],
    }
    
    reply_all_req, violations = engine.check_reply_all_compliance(reply_all_email)
    print(f"  Reply-All Required: {reply_all_req}")
    print(f"  Violations: {len(violations)}")
    for v in violations:
        print(f"    - {v}")
    
    assert reply_all_req == True, "Should require reply-all"
    assert len(violations) >= 1, "Should detect violations"
    print("  ✓ Test 6 PASSED")
    
    # Test 7: Agreement stage
    print("\n--- Test 7: Agreement Stage ---")
    agreement_email = {
        "id": "test_007",
        "subject": "Re: Service Agreement - Confirmed and Accepted",
        "body": """Hi Lisa,
        
        Great news - we have reviewed and accepted the final agreement at 
        $55,000 per year with the following confirmed terms:
        
        - 75 user licenses
        - 24-month contract duration
        - Implementation by June 1st, 2026
        - 99.5% uptime SLA
        - 24/7 premium support included
        
        Please send over the contract for signature. We're looking forward to 
        working with your team!
        
        Best regards,
        Carlos Mendez
        CTO, InnovateCo""",
        "sender": "carlos@innovateco.com",
        "recipients": ["lisa@serviceprovider.com"],
        "cc": ["legal@innovateco.com", "finance@innovateco.com"],
        "bcc": [],
        "thread_history": [
            {"sender": "lisa@serviceprovider.com", "body": "Here's our proposal.",
             "recipients": ["carlos@innovateco.com"], "cc": []},
        ],
    }
    
    report7 = engine.generate_negotiation_report(agreement_email)
    print(f"  Is Negotiation: {report7.is_negotiation}")
    print(f"  Stage: {report7.stage.value}")
    print(f"  Terms Found: {len(report7.terms)}")
    for term in report7.terms:
        print(f"    - [{term.category}] {term.value}")
    print(f"  Tone: {report7.tone_analysis}")
    
    assert report7.is_negotiation == True, "Should detect as negotiation"
    print("  ✓ Test 7 PASSED")
    
    # Test 8: Serialization
    print("\n--- Test 8: Report Serialization ---")
    report_dict = report1.to_dict()
    json_str = json.dumps(report_dict, indent=2)
    assert len(json_str) > 100, "Should produce meaningful JSON"
    parsed = json.loads(json_str)
    assert parsed["is_negotiation"] == True
    assert "negotiation_score" in parsed
    assert "stage" in parsed
    assert "terms" in parsed
    assert "leverage_analysis" in parsed
    assert "counter_offers" in parsed
    assert "batna_analysis" in parsed
    print(f"  JSON output length: {len(json_str)} chars")
    print(f"  Keys: {list(parsed.keys())}")
    print("  ✓ Test 8 PASSED")
    
    # Summary
    print("\n" + "=" * 70)
    print("ALL TESTS PASSED ✓")
    print("=" * 70)
    print(f"\nV687 Email Negotiation Intelligence Engine Summary:")
    print(f"  - Negotiation detection: keyword + pattern + context scoring")
    print(f"  - Stage identification: {len(NegotiationStage)} stages supported")
    print(f"  - Term extraction: price, timeline, deliverable, warranty, SLA, support")
    print(f"  - Leverage analysis: {len(LeverageSource)} leverage sources tracked")
    print(f"  - Counter-offers: {len(NegotiationTactic)} tactics available")
    print(f"  - BATNA analysis: strength scoring + improvement suggestions")
    print(f"  - Reply-all enforcement: multi-party + side-channel detection")
    print(f"  - Tone analysis: aggressive/collaborative/formal classification")
    print(f"  - Urgency detection: HIGH/MEDIUM/NORMAL/LOW levels")
    print(f"  - Deadline detection: automatic extraction from text")


if __name__ == "__main__":
    test_v687()
