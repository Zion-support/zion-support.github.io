 export type LegalStructure = 'Cayman Foundation' | 'Swiss Verein' | 'US 501 (c) (6) ' | 'DAO-native Wrapper';
const registry = `1. Legal Neutrality and Registry\n- Structure: $ {
  legalStructure 
}.\n- Purpose: Maintain global neutrality, operate outside the control of any single jurisdiction, and coordinate public-good infrastructure for the $ {
  name 
}Protocol.\n- Scope: Non-custodial oversight, standard-setting, and community enablement.`;
const mission = `2. Mission and Scope\n- Protect, evolve, and safeguard the $ {
  name 
}Protocol as a public good.\n- Champion open knowledge, reproducible research, and transparent governance.\n- Promote sovereignty for users, developers, and nation/community DAOs.`;
const neutrality = `3. Political and Jurisdictional Neutrality\n- The Foundation is non-partisan and non-sovereign.\n- No nation-state, corporation, or private actor may control governance outcomes.\n- All critical processes are transparent, documented, and reproducible.`;
const treasury = `4. Treasury and Token Oversight\n- The Foundation monitors the on-chain treasury associated with $ {
  symbol 
}for policy compliance and program execution.\n- The Foundation does not custody private keys for third parties and does not provide financial advice.\n- Treasury actions (grants, bounties, RFPs) are executed via on-chain governance with public reporting.`;
const grants = includeGrants ? `7. Multiverse Grants and R&D\n- The Foundation may issue cross-multiverse grants across chains, rollups, and alternate compute realms.\n- Priority to public goods: safety tooling, evaluations, datasets, compute schedulers, agents, and interoperability.\n- Quarterly open calls with transparent selection criteria and milestone-based vesting.` : '';
return [header, '', preamble, '', registry, '', mission, '', neutrality, '', treasury, '', contributors, '', dao, '', grants, '', governance, '', transparency, '', amendments, '', liability] .filter (Boolean) .join ('\n') 
}, [legalStructure, protocolName, tokenSymbol, includeContributorRules, includeGrants, includeDAOIntegration]);
</div> </div> <div className="space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800" > <h2 className="text-lg font-semibold" >Export</h2> <div className="flex gap-3" > <button 
}
}> Download .md </button> <button > Copy to clipboard </button> </div> </div> </div> <div> </div> </div>) 
}