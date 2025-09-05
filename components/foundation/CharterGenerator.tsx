import React, {_useMemo, _useState} from 'react';

export type LegalStructure = 'Cayman Foundation' | 'Swiss Verein' | 'US 501(c)(6)' | 'DAO-native Wrapper';

export default function CharterGenerator() {_const [legalStructure, _setLegalStructure] = useState<LegalStructure>('Cayman Foundation');
  const [protocolName, _setProtocolName] = useState('Zion');
  const [tokenSymbol, _setTokenSymbol] = useState('ZION$');
  const [includeContributorRules, _setIncludeContributorRules] = useState(true);
  const [includeGrants, _setIncludeGrants] = useState(true);
  const [includeDAOIntegration, _setIncludeDAOIntegration] = useState(true);

  const _charterText = useMemo__(() => {
    const _name = protocolName.trim() || 'Zion';
    const _symbol = tokenSymbol.trim() || 'ZION$';

    const _header = `${name} Foundation Charter`;
    const _preamble = `This Charter establishes a legally-neutral foundation (the "Foundation") to steward the ${_name} Protocol, an open, decentralized AI protocol dedicated to sovereignty, open knowledge, and verifiable trust.`;

    const _registry = `1. Legal Neutrality and Registry\n- Structure: ${_legalStructure}.\n- Purpose: Maintain global neutrality, operate outside the control of any single jurisdiction, and coordinate public-good infrastructure for the ${_name} Protocol.\n- Scope: Non-custodial oversight, standard-setting, and community enablement.`;

    const _mission = `2. Mission and Scope\n- Protect, evolve, and safeguard the ${_name} Protocol as a public good.\n- Champion open knowledge, reproducible research, and transparent governance.\n- Promote sovereignty for users, developers, and nation/community DAOs.`;

    const _neutrality = `3. Political and Jurisdictional Neutrality\n- The Foundation is non-partisan and non-sovereign.\n- No nation-state, corporation, or private actor may control governance outcomes.\n- All critical processes are transparent, documented, and reproducible.`;

    const _treasury = `4. Treasury and Token Oversight\n- The Foundation monitors the on-chain treasury associated with ${_symbol} for policy compliance and program execution.\n- The Foundation does not custody private keys for third parties and does not provide financial advice.\n- Treasury actions (grants, bounties, RFPs) are executed via on-chain governance with public reporting.`;

    const _contributors = includeContributorRules
      ? `5. Contributor Program\n- Clear rules of engagement, IP posture: permissive, open-source first (e.g., Apache-2.0/MIT) unless otherwise required.\n- Conflict-of-interest and disclosures required for core stewards and grantees.\n- Security-first norms, responsible disclosure, and reproducible builds.`
      : '';

    const _dao = includeDAOIntegration
      ? `6. DAO Integration\n- The Foundation recognizes the ${_name} DAO as the canonical on-chain governance venue for protocol-level changes.\n- Nation/community DAOs may be delegated voting rights proportionally to stake and verified contribution.\n- Core Stewards are appointed via DAO ratification and subject to removal via DAO vote.`
      : '';

    const _grants = includeGrants
      ? `7. Multiverse Grants and R&D\n- The Foundation may issue cross-multiverse grants across chains, rollups, and alternate compute realms.\n- Priority to public goods: safety tooling, evaluations, datasets, compute schedulers, agents, and interoperability.\n- Quarterly open calls with transparent selection criteria and milestone-based vesting.`
      : '';

    const _governance = `8. Governance and Stewardship\n- Core Stewards: responsible for roadmap curation, risk management, and standards incubation.\n- Open Working Groups: domain-specific forums (safety, evals, infra, devrel).\n- Accountability: proposals, deliberation notes, and decisions published within 7 days.`;

    const _transparency = `9. Transparency and Reporting\n- Quarterly reports: finances, grants, impact metrics, and roadmap updates.\n- On-chain dashboards: treasury flows, vote participation, and execution status.\n- Public archive: MOUs, audits, legal opinions (where permissible).`;

    const _amendments = `10. Amendments\n- Amendable via DAO supermajority or Foundation supermajority plus DAO simple majority.\n- All amendments versioned and time-stamped on IPFS and Git repositories.`;

    const _liability = `11. Limitations and Disclaimers\n- No warranties; the ${_name} Protocol is experimental.\n- The Foundation does not offer securities and does not guarantee token value.\n- Jurisdictional compliance: local obligations remain with individual actors.`;

    return [header, '', preamble, '', registry, '', mission, '', neutrality, '', treasury, '', contributors, '', dao, '', grants, '', governance, '', transparency, '', amendments, '', liability]
      .filter(Boolean)
      .join('\n');
  }, [legalStructure, protocolName, tokenSymbol, includeContributorRules, includeGrants, includeDAOIntegration]);

  return (_<div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Charter Settings</h2>
          <label className="block text-sm">Protocol Name
            <input className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={_protocolName} onChange={_(e) => setProtocolName(e.target.value)} />
          </label>
          <label className="block text-sm">Token Symbol
            <input className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={_tokenSymbol} onChange={_(_e) => setTokenSymbol(e.target.value)} />
          </label>
          <label className="block text-sm">Legal Structure
            <select className="mt-1 w-full rounded border border-gray-300 dark:border-gray-700 bg-transparent px-3 py-2" value={_legalStructure} onChange={_(_e) => setLegalStructure(e.target.value as LegalStructure)}>
              <option value="Cayman Foundation">Cayman Foundation</option>
              <option value="Swiss Verein">Swiss Verein</option>
              <option value="US 501(c)(6)">US 501(c)(6)</option>
              <option value="DAO-native Wrapper">DAO-native legal wrapper (e.g., Otoco)</option>
            </select>
          </label>
          <div className="flex items-center gap-3">
            <input id="contrib" type="checkbox" checked={_includeContributorRules} onChange={_(_e) => setIncludeContributorRules(e.target.checked)} />
            <label htmlFor="contrib" className="text-sm">Include contributor program rules</label>
          </div>
          <div className="flex items-center gap-3">
            <input id="dao" type="checkbox" checked={_includeDAOIntegration} onChange={_(_e) => setIncludeDAOIntegration(e.target.checked)} />
            <label htmlFor="dao" className="text-sm">Include DAO integration</label>
          </div>
          <div className="flex items-center gap-3">
            <input id="grants" type="checkbox" checked={_includeGrants} onChange={_(_e) => setIncludeGrants(e.target.checked)} />
            <label htmlFor="grants" className="text-sm">Include multiverse grants</label>
          </div>
        </div>
        <div className="space-y-4 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
          <h2 className="text-lg font-semibold">Export</h2>
          <div className="flex gap-3">
            <button
              className="px-3 py-2 rounded bg-cyan-600 text-white hover:bg-cyan-700"
              onClick={_() => {
                const _blob = new Blob([charterText], _{ type: 'text/markdown;charset=utf-8'});
                const _url = window.URL.createObjectURL(blob);
                const _a = document.createElement('a');
                a.href = url;
                a.download = `${_protocolName || 'zion'}-foundation-charter.md`;
                a.click();
                window.URL.revokeObjectURL(url);
              }}
            >
              Download .md
            </button>
            <button
              className="px-3 py-2 rounded border border-gray-300 dark:border-gray-700"
              onClick={_() => navigator.clipboard.writeText(charterText)}
            >
              Copy to clipboard
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold mb-2">Generated Charter Preview</h2>
        <textarea className="w-full h-96 rounded border border-gray-300 dark:border-gray-700 bg-transparent p-3 font-mono text-sm" value={_charterText} readOnly />
      </div>
    </div>
  );
}