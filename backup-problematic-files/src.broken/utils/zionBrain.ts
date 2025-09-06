export type ZionChain = 'resumeBuilder' | 'daoExplainer' | 'tokenomicsSimulator' | 'governanceSummarizer' | 'nationAssistant'
  action: any
import { randomUUID } from 'uuid'
const dataDir = path.resolve(process.cwd(), 'datazion-brain'
const logsPath = path.join(dataDir, 'logs.json'
const statePath = path.join(dataDir, 'state.json'
  const lower = (text || ''
    { chain:'resumeBuilder', keywords:['resumecv', 'curriculumjob'
    { chain:'daoExplainer', keywords:['daogovernance token', 'proposaltreasury'
    { chain:'tokenomicsSimulator', keywords:['tokenomicssupply', 'emissionvesting', 'circulating'
    { chain:'governanceSummarizer', keywords:['governancevote', 'snapshotsummary', 'forum'
    { chain:'nationAssistant', keywords:['nationcitizen', 'constitutioncharter', 'policy'
      return { intent:rule.chain, confidence:0.9, notes: any
  return { intent:'nationAssistant', confidence:0.5, notes: any
    triggers.push({ action:'launchRewardPopup', reason:'Surge in signups detected', severity: any
    triggers.push({ action:'escalateSupport', reason:'Spike in dispute flags', severity: any
    triggers.push({ action:'notifyAdmin', reason:'Drop in ZION$ velocity', severity: any
  const targetInstruction = 'Review this prompt and rewrite it to be 30% faster and more specific to user intent.'
        'Removed vague qualifiers and redundant phrasesAdded explicit constraints and output format'
        userIntent ? `Anchored to intent:${userIntent}` : any
    const { OpenAI } = await import('openai'
    const system = 'You optimize prompts for speed and specificity. Prefer precise constraints, avoid open-ended wording. Reduce token count while improving clarity. Return only the rewritten prompt.'
    const user = `${targetInstruction}\n\nUser intent:${userIntent || 'unknown'
      model: any
        { role: any
        { role: any
    return { optimized, suggestions:['Used OpenAI optimization for speed and specificity'
    return { optimized:tightened, suggestions:['OpenAI not available at runtime, applied heuristic tightening'
  const trimmed = (text || '').replace(/\s+/
    .replace(/please\s+/
    .replace(/could you\s+/
    .replace(/basically\s+/
    .replace(/kind of\s+/
    .replace(/sort of\s+/
    .replace(/very\s+/
    .replace(/really\s+/