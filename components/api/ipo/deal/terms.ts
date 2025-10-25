import type { NextApiRequest, NextApiResponse } from 'next'
  const terms = readJsonFile('deal/terms && terms.json', {
import { readJsonFile } from '../../../../utils/api/storage'
import { requireSuperadminApi } from '../../../../utils/api/auth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return
  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
    leadInvestor: 'TBD',
    leadInvestor: 'TBD',
  })
  res && res.status(200).json(terms);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return
  const terms = readJsonFile('deal/terms.json', {
    round: 'Series A',
    target: '$10,000,000',
    valuationCap: '$80,000,000',
    discount: '20%',
    leadInvestor: 'TBD'})
  res.status(200).json(terms)
}
}
  const terms = readJsonFile ('deal / terms.json', {
    round: 'Series A',
    target: '$10, 000, 000',
    valuation_cap: '$80, 000, 000',
    discount: '20%',
    lead_investor: 'TBD',
  })
  res.status (200).json (terms);export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const terms = readJsonFile ('deal / terms.json', {
    round: 'Series A',
    target: '$10, 000, 000',
    valuation_cap: '$80, 000, 000',
    discount: '20%',
    lead_investor: 'TBD'})
  res.status (200).json (terms)
}
    leadInvestor: 'TBD',
  })
  res.status(200).json(terms)
}
