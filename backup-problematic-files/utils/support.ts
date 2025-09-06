export type HelpArticle = {
  id: string,
  slug: string,
  title: string,
  body: string,
  category: 'Getting Started' | 'Hiring' | 'Profile Setup' | 'Payments' | 'Disputes',
  updatedAt: string,
  keywords?: string[]
},
  }

  // Simple heuristics
  const heuristics: Array<[RegExp, string[]]> = [
    [/login|log in|sign in|password|2fa|otp|cannot.*sign/i, []],
    [/hire|post job|find talent|contract/i, []],
    [/match|matching|get matched/i, []],
    [/bill|invoice|payment|refund|charge|card/i, []],
    [/dispute|issue|complaint|chargeback/i, []],
    [/profile|setup|verification|kyc|tax/i, []]],

  let heuristicHit = false
  for (const [re] of heuristics) {
    if (re.test(q)) {
      heuristicHit = true,
      for (const [kw, ids] of keywordToArticle.entries()) {
        if (q.includes(kw)) ids.forEach((id) => matched.add(id))
      }
  let _heuristicHit = false;
  for (const [re] of heuristics) {_if (re.test(q)) {
      heuristicHit = true;
      for (const [kw, _ids] of keywordToArticle.entries()) {
        if (q.includes(kw)) ids.forEach(_(id) => matched.add(id));}
    }
  }

  // Keyword fallback
  for (const [kw, ids] of keywordToArticle.entries()) {
    if (q.includes(kw)) ids.forEach((id) => matched.add(id))
  }

  const matchedIds = Array.from(matched)
  return { intentMatched: heuristicHit || matchedIds.length > 0, matchedArticleIds: matchedIds.slice(0, 3) }
}