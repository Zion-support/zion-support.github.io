export type GovernanceMode = "Admin" | "DAO" | "Hybrid",

export interface Branding {
  logoUrl?: string,
  primaryColor?: string,
  secondaryColor?: string,
  subdomain?: string

export interface DeployModules {
  marketplace: boolean,
  gpt: boolean,
  academy: boolean,
  token: boolean,
  dao: boolean,
  nationBuilder: boolean,
  launchKit: boolean,
  bookBuilder: boolean,
  roadmapWhitepaper: boolean,
  apiDocsWiki: boolean,
  zionBrain: boolean,
