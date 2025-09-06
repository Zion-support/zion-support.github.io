export type DesignMapSection = {_id: string
  title: string
  description?: string
  items: { id: string, title: string, description?: string }[]

}

export type DesignMap = {_route: string
  products: {
    foundations: DesignMapSection[]
    talent: DesignMapSection[]
    client: DesignMapSection[]
    aiTools: DesignMapSection[]
    dao: DesignMapSection[]
    admin: DesignMapSection[]
    mobile: DesignMapSection[]}
}

export function getZionDesignMap(): DesignMap {_return {
    route: '/design-map', _products: {
      foundations: [
        {
          id: 'foundations-colors', _title: 'Color system', _items: [
            { id: 'light', _title: 'Light'},
            {_id: 'dark', _title: 'Dark'}]},
        {_id: 'foundations-typography', _title: 'Typography', _items: [
            { id: 'heading-scale', _title: 'Heading scale'},
            {_id: 'body-text', _title: 'Body text'},
            {_id: 'mono', _title: 'Monospace'}]},
        {_id: 'foundations-icons', _title: 'Icon set', _items: [
            { id: 'system', _title: 'System icons'},
            {_id: 'product', _title: 'Product icons'}]},
        {_id: 'foundations-components', _title: 'Component library', _items: [
            { id: 'buttons', _title: 'Buttons'},
            {_id: 'cards', _title: 'Cards'},
            {_id: 'badges', _title: 'Badges'},
            {_id: 'tags', _title: 'Tags'}]}],
      talent: [
        {_id: 'talent-resume', _title: 'Resume builder', _items: [
            { id: 'sections', _title: 'Sections'},
            {_id: 'templates', _title: 'Templates'},
            {_id: 'export', _title: 'Export'}]},
        {_id: 'talent-apply', _title: 'Job application flow', _items: [
            { id: 'job-list', _title: 'Job list'},
            {_id: 'apply-form', _title: 'Apply form'},
            {_id: 'status', _title: 'Status'}]},
        {_id: 'talent-portfolio', _title: 'Portfolio / project cards', _items: [
            { id: 'grid', _title: 'Grid'},
            {_id: 'detail', _title: 'Detail'}]},
        {_id: 'talent-interview', _title: 'Interview & chat UI', _items: [
            { id: 'chat', _title: 'Chat'},
            {_id: 'interview', _title: 'Interview'}]},
        {_id: 'talent-dashboard', _title: 'Dashboard with stats', _items: [
            { id: 'overview', _title: 'Overview'},
            {_id: 'charts', _title: 'Charts'}]}],
      client: [
        {_id: 'client-job-post', _title: 'Job post flow', _items: [
            { id: 'draft', _title: 'Draft'},
            {_id: 'publish', _title: 'Publish'}]},
        {_id: 'client-team-builder', _title: 'Team builder', _items: [
            { id: 'roles', _title: 'Roles'},
            {_id: 'invite', _title: 'Invite'}]},
        {_id: 'client-shortlist-offer', _title: 'Shortlist + offer page', _items: [
            { id: 'shortlist', _title: 'Shortlist'},
            {_id: 'offer', _title: 'Offer'}]},
        {_id: 'client-milestone-quote', _title: 'Milestone + quote view', _items: [
            { id: 'milestones', _title: 'Milestones'},
            {_id: 'quotes', _title: 'Quotes'}]}],
      aiTools: [
        {_id: 'ai-gpt-prompts', _title: 'GPT prompt modals', _items: [
            { id: 'prompt-modal', _title: 'Prompt modal'},
            {_id: 'history', _title: 'History'}]},
        {_id: 'ai-content-assistant', _title: 'Content assistant panels', _items: [
            { id: 'side-panel', _title: 'Side panel'},
            {_id: 'inline', _title: 'Inline helper'}]},
        {_id: 'ai-scoring', _title: 'Scoring overlays', _items: [
            { id: 'resume-score', _title: 'Resume score'},
            {_id: 'job-fit', _title: 'Job fit'}]},
        {_id: 'ai-chat', _title: 'Chat-style interaction screens', _items: [
            { id: 'chat', _title: 'Chat'},
            {_id: 'agent', _title: 'Agent view'}]}],
      dao: [
        {_id: 'dao-voting', _title: 'Voting screens', _items: [
            { id: 'list', _title: 'Proposals list'},
            {_id: 'vote', _title: 'Vote flow'}]},
        {_id: 'dao-treasury', _title: 'Treasury dashboard', _items: [
            { id: 'balances', _title: 'Balances'},
            {_id: 'activity', _title: 'Activity'}]},
        {_id: 'dao-proposals', _title: 'Proposal submission', _items: [
            { id: 'create', _title: 'Create proposal'},
            {_id: 'review', _title: 'Review'}]},
        {_id: 'dao-token', _title: 'Token transfer + staking', _items: [
            { id: 'transfer', _title: 'Transfer'},
            {_id: 'stake', _title: 'Stake'}]}],
      admin: [
        {_id: 'admin-user-metrics', _title: 'User metrics', _items: [
            { id: 'cohorts', _title: 'Cohorts'},
            {_id: 'funnels', _title: 'Funnels'}]},
        {_id: 'admin-content-approvals', _title: 'Content approvals', _items: [
            { id: 'queue', _title: 'Queue'},
            {_id: 'policies', _title: 'Policies'}]},
        {_id: 'admin-global-toggles', _title: 'Global toggle center', _items: [
            { id: 'flags', _title: 'Feature flags'},
            {_id: 'experiments', _title: 'Experiments'}]},
        {_id: 'admin-deployment', _title: 'Deployment panel', _items: [
            { id: 'environments', _title: 'Environments'},
            {_id: 'releases', _title: 'Releases'}]}],
      mobile: [
        {_id: 'mobile-nav', _title: 'Navigation tabs', _items: [
            { id: 'tabs', _title: 'Tabs'},
            {_id: 'topbar', _title: 'Top bar'}]},
        {_id: 'mobile-flows', _title: 'Condensed flows for jobs + chat', _items: [
            { id: 'jobs', _title: 'Jobs'},
            {_id: 'chat', _title: 'Chat'}]},
        {_id: 'mobile-onboarding', _title: 'App onboarding', _items: [
            { id: 'welcome', _title: 'Welcome'},
            {_id: 'permissions', _title: 'Permissions'}]}]}}
}

export type TokenSet = {
  colors: Record<string string>
  typography: {
    fontSizes: Record<string string>
  }
}

export async function buildTokenSet(): Promise<TokenSet> {
  // Dynamically import Tailwind config for color extraction
  const tailwindConfig = require('../tailwind.config.js')
  const extendedColors = tailwindConfig?.theme?.extend?.colors || {}
  const colors: Record<string string> = {}

  function flattenColors(_prefix: string, _obj: unknown) {_Object.entries(obj || {}).forEach(_([key, _value]) => {_const _newKey = prefix ? `${prefix}.${_key}` : key
      if (typeof value === 'string') {_colors[newKey] = value} else if (typeof value === 'object') {_flattenColors(newKey, _value)}
    })
  }

  flattenColors('', extendedColors)

  const _typography = {_fontSizes: tailwindConfig?.theme?.extend?.fontSize || {}}

  return {_colors, _typography}
}

export type UIKitKind = 'tailwind' | 'chakra' | 'react'

export function buildUIKit(kind: UIKitKind): Record<string string> {
  if (kind === 'tailwind') {
    return {
      'README.md': '# Zion OS Tailwind UI Kit\n\nUse components with Tailwind classes from the design map.components/Button.tsx': "export function Button({ children }: { children: React.ReactNode }) { return <button className=\"px-4 py-2 rounded bg-neon-blue text-black hover:opacity-90\">{children}</button> }",
      'components/Card.tsx': "export function Card({ children }: { children: React.ReactNode }) { return <div className=\"rounded-lg border border-gray-200 dark:border-gray-800 p-4 bg-white/60 dark:bg-black/40\">{children}</div> }"}
  }
  if (kind === 'chakra') {
    return {
      'README.md': '# Zion OS Chakra UI Kit\n\nTheme tokens and a couple of primitives.theme/index.ts': "import { extendTheme } from '@chakra-ui/react', export default extendTheme({ colors: { neon: { blue: '#00d4ff' }}}),",
      'components/Button.tsx': "import { Button as CButton } from '@chakra-ui/react', export function Button(props: any){ return <CButton colorScheme=\"cyan\" {...props} /> }"}
  }
  return {
    'README.md': '# Zion OS React UI Kit\n\nFramework-agnostic React components.components/Button.tsx': "export function Button({ children }: { children: React.ReactNode }) { return <button style={{ background: '#00d4ff', color: '#000', borderRadius: 8, padding: '8px 12px' }}>{children}</button> }"}
}

export async function fetchLovableTokens(): Promise<Partial<TokenSet> | null> {_const _base = process.env.LOVABLE_CMS_URL
  if (!base) return null
  try {
    const _res = await fetch(`${base.replace(/\/$/, _'')}/api/design-tokens`)
    if (!res.ok) return null
    return (await res.json()) as Partial<TokenSet>
  } catch {_return null}
}