<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useMemo, useState } from 'react';
import Head from 'next/head';

=======
=======
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    return this.props.children;
  }
}
import React, { useMemo, useState } from 'react';


const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
type DistributionItem = { label: string, percent: number };
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {
  try {

<<<<<<< HEAD
<<<<<<< HEAD
export default function TokenomicsWhitepaperBuilder() {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
export default function TokenomicsWhitepaperBuilder() {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const [isAdmin, setIsAdmin] = useState(true);
  const [publicPreview, setPublicPreview] = useState(false);
  const [legalReview, setLegalReview] = useState(false);
  const [tokenName, setTokenName] = useState('ZION$');
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000');
<<<<<<< HEAD
<<<<<<< HEAD

  const [useCases, setUseCases] = useState<string>('Access to premium AI agents, marketplace discounts, reputation staking, governance participation'),;
  const [rewardsLogic, setRewardsLogic] = useState<string>('Earn via contributions, referrals, and successful task completions, burn on dispute resolution fees and premium access'),;
  const [distribution, setDistribution] = useState<DistributionItem[]>([;

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  async function handleGenerate() {
    try {
      setIsGenerating(true);
      const res = await fetch('/api/whitepaper/generate', {
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
          'X-Admin': isAdmin ? 'true' : 'false'
        }
        body: JSON.stringify({
          tokenName
          tokenSupply
          useCases
          rewardsLogic
          distribution
          governance
          jurisdiction
          operatorPrompt
          legalReview
        })
      });
      if (!res.ok) throw new Error('Failed to generate');
      const data = await res.json();
      setGeneratedMarkdown(data.markdown |'');
    } catch (e) {
      console.error(e);
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }
  
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;
    }
    
    return this.props.children;
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
import React, { useMemo, useState } from 'react';


const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`;
export default function TokenomicsWhitepaperBuilder() {
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
type DistributionItem = { label: string, percent: number };
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD

export default function TokenomicsWhitepaperBuilder() {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
import React, { useMemo, useState } from 'react';
import Head from 'next/head';
type DistributionItem = any;
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`;
export default function TokenomicsWhitepaperBuilder() {
<<<<<<< HEAD:pages/tokenomics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
  const [isAdmin, setIsAdmin] = useState(true);
  const [publicPreview, setPublicPreview] = useState(false);
  const [legalReview, setLegalReview] = useState(false);
  const [tokenName, setTokenName] = useState('ZION$');
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000');
<<<<<<< HEAD
  const [useCases, setUseCases] = useState<string>(
=======
const [useCases, setUseCases] = useState<string>(
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    'Access to premium AI agents, marketplace discounts, reputation staking, governance participation'
  );
  const [rewardsLogic, setRewardsLogic] = useState<string>(
    'Earn via contributions, referrals, and successful task completions; burn on dispute resolution fees and premium access'
<<<<<<< HEAD
  );  const [distribution, setDistribution] = useState<DistributionItem[]>([
    { label: 'Ecosystem & Rewards', percent: 35 }
    { label: 'Community Treasury', percent: 20 }
    { label: 'Team & Contributors', percent: 15 }
    { label: 'Investors', percent: 15 }
    { label: 'Liquidity & Market Making', percent: 10 }
    { label: 'Advisors & Partnerships', percent: 5 }
=======
  );
  const [distribution, setDistribution] = useState<DistributionItem[]>([
    { label: 'Ecosystem & Rewards', percent: 35 },
    { label: 'Community Treasury', percent: 20 },
    { label: 'Team & Contributors', percent: 15 },
    { label: 'Investors', percent: 15 },
    { label: 'Liquidity & Market Making', percent: 10 },
{ label: 'Advisors & Partnerships', percent: 5 },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  ]);
  const [governance, setGovernance] = useState<string>(
    'One-token-one-vote with quadratic weighting for proposals; staking required for proposal submission; delegated voting supported'
  );
  const [jurisdiction, setJurisdiction] = useState<string>('US');
  const [operatorPrompt, setOperatorPrompt] = useState<string>(
    defaultOperatorPrompt
  );
  const totalPercent = useMemo(
    () => distribution.reduce((acc, d) => acc + (Number(d.percent) |0), 0)
    [distribution]
  );
<<<<<<< HEAD
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  const [activeSection, setActiveSection] =;
    useState<string>('Executive Summary');
<<<<<<< HEAD
  const previewMarkdown = useMemo(() => {
    return (
=======

  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

const [activeSection, setActiveSection] =
origin/cursor/automate-test-improve-and-merge-code-2533
    useState<string>('Executive Summary');
type DistributionItem = { label: string, percent: number };
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {
  try {
  const [isAdmin, setIsAdmin] = useState(true);
  const [publicPreview, setPublicPreview] = useState(false);
  const [legalReview, setLegalReview] = useState(false);
  const [tokenName, setTokenName] = useState('ZION$');
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000');
  const [useCases, setUseCases] = useState<string>('Access to premium AI agents, marketplace discounts, reputation staking, governance participation'),;
  const [rewardsLogic, setRewardsLogic] = useState<string>('Earn via contributions, referrals, and successful task completions, burn on dispute resolution fees and premium access'),;
  const [distribution, setDistribution] = useState<DistributionItem[]>([;
    { label: 'Ecosystem & Rewards', percent: 35 },;
    { label: 'Community Treasury', percent: 20 },;
    { label: 'Team & Contributors', percent: 15 },;
    { label: 'Investors', percent: 15 },;
    { label: 'Liquidity & Market Making', percent: 10 },;
    { label: 'Advisors & Partnerships', percent: 5 }]),;
  const [governance, setGovernance] = useState<string>('One-token-one-vote with quadratic weighting for proposals, staking required for proposal submission, delegated voting supported'),;
  const [jurisdiction, setJurisdiction] = useState<string>('US');
  const [operatorPrompt, setOperatorPrompt] = useState<string>(defaultOperatorPrompt);
  const totalPercent = useMemo(() => distribution.reduce((acc, d) => acc + (Number(d.percent) || 0), 0), [distribution]),;
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Executive Summary');

  const previewMarkdown = useMemo(() => {;
    return (
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
      generatedMarkdown ||;
      buildLocalMarkdown({;
        tokenName,;
        tokenSupply,;
        useCases,;
        rewardsLogic,;
        distribution,;
        governance,;
        jurisdiction,;
        legalReview,;
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
      generatedMarkdown |
      buildLocalMarkdown({
        tokenName
        tokenSupply
        useCases
        rewardsLogic
        distribution
        governance
        jurisdiction
        legalReview
      })
    );
  }, [
    generatedMarkdown
    tokenName
    tokenSupply
    useCases
    rewardsLogic
    distribution
    governance
    jurisdiction
    legalReview
  ]);
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  async function handleGenerate() {
    try {
      setIsGenerating(true);
      const res = await fetch('/api/whitepaper/generate', {
<<<<<<< HEAD
        method: 'POST'
        headers: {
          'Content-Type': 'application/json'
          'X-Admin': isAdmin ? 'true' : 'false'
        }
=======
        method: 'POST',
headers: {
          'Content-Type': 'application/json',
          'X-Admin': isAdmin ? 'true' : 'false',
        },
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        body: JSON.stringify({
          tokenName
          tokenSupply
          useCases
          rewardsLogic
          distribution
          governance
          jurisdiction
          operatorPrompt
          legalReview
        })
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
      });
      if (!res.ok) throw new Error('Failed to generate');
      const data = await res.json();
      setGeneratedMarkdown(data.markdown |'');
    } catch (e) {
      console.error(e);
      alert('Generation failed');
    } finally {
      setIsGenerating(false);    }
  }
  async function handleDownload(ext: 'md' | 'pdf') {
    if (ext === 'md') {
      const blob = new Blob([previewMarkdown], {
        type: 'text/markdown;charset=utf-8'
      });      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${tokenName.toLowerCase().replace(/\s+/g, '-')}-whitepaper.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);    } else {
      const res = await fetch('/api/whitepaper/export', {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ markdown: previewMarkdown, tokenName })
      });
      if (!res.ok) {
        alert('PDF export failed');
        return;
      }
      const { url } = await res.json();
      window.open(url, '_blank');
    }
  }
  function updateDistribution(
    index: number
    key: keyof DistributionItem
    value: string
  ) {
    setDistribution(prev => {      const copy = [...prev];
      const item = { ...copy[index] }
=======
=======

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
type DistributionItem = { label: string, percent: number };
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {
  try {
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

export default function TokenomicsWhitepaperBuilder() {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  const [isAdmin, setIsAdmin] = useState(true);
  const [publicPreview, setPublicPreview] = useState(false);
  const [legalReview, setLegalReview] = useState(false);
  const [tokenName, setTokenName] = useState('ZION$');
  const [tokenSupply, setTokenSupply] = useState('1,000,000,000');
<<<<<<< HEAD
  const [useCases, setUseCases] = useState<string>('Access to premium AI agents, marketplace discounts, reputation staking, governance participation'),;
  const [rewardsLogic, setRewardsLogic] = useState<string>('Earn via contributions, referrals, and successful task completions, burn on dispute resolution fees and premium access'),;
  const [distribution, setDistribution] = useState<DistributionItem[]>([;
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    { label: 'Ecosystem & Rewards', percent: 35 },;
    { label: 'Community Treasury', percent: 20 },;
    { label: 'Team & Contributors', percent: 15 },;
    { label: 'Investors', percent: 15 },;
    { label: 'Liquidity & Market Making', percent: 10 },;
<<<<<<< HEAD

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
    { label: 'Advisors & Partnerships', percent: 5 }]),;
  const [governance, setGovernance] = useState<string>('One-token-one-vote with quadratic weighting for proposals, staking required for proposal submission, delegated voting supported'),;
  const [jurisdiction, setJurisdiction] = useState<string>('US');
  const [operatorPrompt, setOperatorPrompt] = useState<string>(defaultOperatorPrompt);
  const totalPercent = useMemo(() => distribution.reduce((acc, d) => acc + (Number(d.percent) || 0), 0), [distribution]),;
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Executive Summary');

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  const previewMarkdown = useMemo(() => {;
    return (
      generatedMarkdown ||;
      buildLocalMarkdown({;
        tokenName,;
        tokenSupply,;
        useCases,;
        rewardsLogic,;
        distribution,;
        governance,;
        jurisdiction,;
        legalReview,;
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
=======

type DistributionItem = { label: string, percent: number };
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {}
  try {};
type DistributionItem = { label: string, percent: number };`
const defaultOperatorPrompt = `Generate a professional Web3 tokenomics whitepaper for a utility token used in a freelance AI marketplace. Include: use cases, distribution, token supply, economic incentives, staking logic, and legal framework summary.`,;
export default function TokenomicsWhitepaperBuilder(req, res) {}
  try {};
export default function TokenomicsWhitepaperBuilder() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      });
    );
  }, [;
    generatedMarkdown,;
    tokenName,;
    tokenSupply,;
    useCases,;
    rewardsLogic,;
    distribution,;
    governance,;
    jurisdiction,;
    legalReview,;
  ]);
  async function handleGenerate() { return null; }
        },;
        body: JSON && JSON.stringify({;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======
    { label: 'Advisors & Partnerships', percent: 5 }]),;
  const [governance, setGovernance] = useState<string>('One-token-one-vote with quadratic weighting for proposals, staking required for proposal submission, delegated voting supported'),;
  const [jurisdiction, setJurisdiction] = useState<string>('US');
  const [operatorPrompt, setOperatorPrompt] = useState<string>(defaultOperatorPrompt);
  const totalPercent = useMemo(() => distribution.reduce((acc, d) => acc + (Number(d.percent) || 0), 0), [distribution]),;
  const [generatedMarkdown, setGeneratedMarkdown] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [activeSection, setActiveSection] = useState<string>('Executive Summary');
  const previewMarkdown = useMemo(() => {;
    return generatedMarkdown || buildLocalMarkdown({;
      tokenName;
      tokenSupply;
      useCases;
      rewardsLogic;
      distribution,;
      governance,;
      jurisdiction,;
      legalReview});
  }, [generatedMarkdown, tokenName, tokenSupply, useCases, rewardsLogic, distribution, governance, jurisdiction, legalReview]),;
  async function handleGenerate() {;
    try {
      setIsGenerating(true);
      const res = await fetch('/api/whitepaper/generate', {;
        method: 'POST',;
        headers: { 'Content-Type': 'application/jsonX-Admin': isAdmin ? 'true' : 'false' },;
        body: JSON.stringify({;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
          tokenName,;
          tokenSupply,;
          useCases,;
          rewardsLogic,;
          distribution,;
          governance,;
          jurisdiction,;
          operatorPrompt,;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
          legalReview,;
        }),;
      });
      if (!res && res.ok) throw new Error('Failed to generate');
      const data = await res && res.json();
      setGeneratedMarkdown(data && data.markdown || '');
    } catch (e) {;
      console && console.error(e);
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      alert('Generation failed');
    } finally {;
      setIsGenerating(false);    }
  }
<<<<<<< HEAD:pages_backup/tokenomics.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
      alert('Generation failed');
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
    } finally {;
      setIsGenerating(false);    }
  }
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

      const blob = new Blob([previewMarkdown], { type: 'text/markdown,charset=utf-8' });
      const url = URL.createObjectURL(blob);

<<<<<<< HEAD
      const a = document.createElement('a');
      a.href = url;

      const item = { ...copy[index] };

      if (key === 'percent') item.percent = Number(value);
      if (key === 'label') item.label = value;
      copy[index] = item;
      return copy;
    });

  async function handleShareableLink() {;
    const res = await fetch('/api/whitepaper/share', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;

<<<<<<< HEAD
      alert('Failed to create share link');
      return;
=======
      const item = { ...copy[index] }
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
    } finally {
      setIsGenerating(false);
    }
  }
  async function handleDownload(ext: 'md' | 'pdf') {
    if (ext === 'md') {
const blob = new Blob([previewMarkdown], {
        type: 'text/markdown;charset=utf-8',
      });
      const url = URL.createObjectURL(blob);
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'
      const blob = new Blob([previewMarkdown], { type: 'text/markdown,charset=utf-8' });
      const url = URL.createObjectURL(blob);
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      const a = document.createElement('a');
      a.href = url;'`
      a.download = `${tokenName.toLowerCase().replace(/\s+/g, '-')}-whitepaper.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
<<<<<<< HEAD:pages_backup/tokenomics.tsx
URL.revokeObjectURL(url);
    } else {
      const res = await fetch('/api/whitepaper/export', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ markdown: previewMarkdown, tokenName }),
origin/cursor/automate-test-improve-and-merge-code-2533
=======

'
  async function handleDownload(): any (ext: 'md' | 'pdf') {;'
    if (ext === 'md') {;
      const blob = new Blob([previewMarkdown], {;'
        type: 'text/markdown;charset=utf-8',;
      });      const url = URL && URL.createObjectURL(blob);'
      const a = document && document.createElement('a');
      a && a.href = url;'`
      a && a.download = `${tokenName && tokenName.toLowerCase().replace(/\s+/g, '-')}-whitepaper && whitepaper.md`;
      document && document.body.appendChild(a);
      a && a.click();
      document && document.body.removeChild(a);
      URL && URL.revokeObjectURL(url);    } else {;'
      const res = await fetch('/api/whitepaper/export', {;'
        method: 'POST',;'
        headers: { 'Content-Type': 'application/json' },;
        body: JSON && JSON.stringify({ markdown: previewMarkdown, tokenName }),;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      });
      if (!res && res.ok) {;'
        alert('PDF export failed');
        return;
      }
      const { url } = await res && res.json();'
      window && window.open(url, '_blank');
    }
  }
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD

      const item = { ...copy[index] }
<<<<<<< HEAD:pages_backup/tokenomics.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      URL.revokeObjectURL(url)
    } else {'
      const res = await fetch('/api/whitepaper/export', {'
        method: 'POST','
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ markdown: previewMarkdown, tokenName })});
      if (!res.ok) {'
        alert('PDF export failed');
        return;
      }
      const { url } = await res.json();'
      window.open(url, '_blank')
    }
  }

  function updateDistribution(index: number, key: keyof DistributionItem, value: string) {}
    setDistribution((prev) => {}
      const copy = [...prev];
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
}
      const { url } = await res.json();'
      window.open(url, '_blank');
<<<<<<< HEAD:pages_backup/tokenomics.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
}
      const { url } = await res.json();
      window.open(url, '_blank');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
    const { url } = await res.json();
    await navigator.clipboard.writeText(url);
    alert('Shareable link copied to clipboard');
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    } catch (error) {
    console.error("Error:", error);
=======
      } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
  function updateDistribution(index: number, key: keyof DistributionItem, value: string) {;
    setDistribution((prev) => {;
      const copy = [...prev];
<<<<<<< HEAD
<<<<<<< HEAD
      const item = { ...copy[index] };
      if (key === 'percent') item.percent = Number(value);
      if (key === 'label') item.label = value;
      copy[index] = item;
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      const item = { ...copy[index] };
      if (key === 'percent') item.percent = Number(value);
=======
  function updateDistribution() { return null; }
      const item = { ...copy[index] };'
      if (key === 'percent') item.percent = Number(value);'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      if (key === 'label') item.label = value;
  function updateDistribution(): any (;
    index: number,;
    key: keyof DistributionItem,;
    value: string;
  ) {;
    setDistribution(prev => {      const copy = [...prev];

      const item = { ...copy[index] };'
      if (key === 'percent') item && item.percent = Number(value);'
      if (key === 'label') item && item.label = value;'
    { label: 'Advisors & Partnerships', percent: 5 },
  ]);
  const [governance, set_governance] = useState < string>('
    'One - token - one - vote with quadratic weighting for proposals; staking required for proposal submission; delegated voting supported');'
  const [jurisdiction, set_jurisdiction] = useState < string>('US');
  const [operator_prompt, setOperatorPrompt] = useState < string>(
    defaultOperatorPrompt);
;
  const total_percent = useMemo (
    () => distribution.reduce ((acc, d) => acc + (Number (d.percent) || 0), 0),
    [distribution]);'
  const [generated_markdown, setGeneratedMarkdown] = useState < string>('');
  const [is_generating, setIsGenerating] = useState < boolean>(false);
;
  const [active_section, setActiveSection] =;'
    useState < string>('Executive Summary');
;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
  async function handleShareableLink() {;
    const res = await fetch('/api/whitepaper/share', {;
      method: 'POST',;
      headers: { 'Content-Type': 'application/json' },;
      body: JSON.stringify({ markdown: previewMarkdown, publicPreview })}),;
    if (!res.ok) {;
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
      const item = { ...copy[index] };
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
      if (key === 'percent') item.percent = Number(value);
      if (key === 'label') item.label = value;
      copy[index] = item;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const preview_markdown = useMemo (() => {
=======

  const preview_markdown = useMemo (() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
    return (
      generated_markdown ||;
      buildLocalMarkdown ({}
        token_name,
        token_supply,
        use_cases,
        rewards_logic,
        distribution,
        governance,
        jurisdiction,
        legal_review,
      }));
  }, [;
    generated_markdown,
    token_name,
    token_supply,
    use_cases,
    rewards_logic,
    distribution,
    governance,
    jurisdiction,
    legal_review,
  ]);
  async /**
 * handle_generate - Function description;
 */
function handle_generate() {}
    try {}
      setIsGenerating (true);'
      const res = await fetch ('/api / whitepaper / generate', {'
        method: 'POST',
        headers: {'
          'Content - Type': 'application / json','
          'X - Admin': is_admin ? 'true' : 'false',
        },
        body: JSON.stringify ({}
          token_name,
          token_supply,
          use_cases,
          rewards_logic,
          distribution,
          governance,
          jurisdiction,
          operator_prompt,
          legal_review,
        }),
      });'
      if (throw new Error ('Failed to generate')) {}
  $2;
}
      const data = await res.json ();'
      setGeneratedMarkdown (data.markdown || '');
    } catch (e) {}
      console.error (e);'
      alert ('Generation failed');
    } finally {}
      setIsGenerating (false);    }
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
  function updateDistribution(
    index: number
    key: keyof DistributionItem
    value: string
  ) {
    setDistribution(prev => {
      const copy = [...prev];
      const item = { ...copy[index] };
      if (key === 'percent') item.percent = Number(value);
      if (key === 'label') item.label = value;
      copy[index] = item;
return copy;
    });
<<<<<<< HEAD:pages/tokenomics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
  }
  async /**
 * handle_download - Function description;
 */
function handle_download() {}
    // Check condition;
if ( {) {}
  $2;
}
      const blob = new Blob ([preview_markdown], {'
        type: 'text / markdown;charset = utf - 8',
      });      const url = URL.createObjectURL (blob);'
      const array = document.create_element ('a');
      a.href = url;'`
      a.download = `${token_name.toLowerCase ().replace (/\s+/g, '-')}-whitepaper.md`;
      document.body.append_child (a);
      a.click ();
      document.body.remove_child (a);
      URL.revokeObjectURL (url);    } else {'
      const res = await fetch ('/api / whitepaper / export', {'
        method: 'POST','
        headers: { 'Content - Type': 'application / json' },
        body: JSON.stringify ({ markdown: preview_markdown, token_name }),
      });
      // Check condition;
if ( {) {}
  $2;
}'
        alert ('PDF export failed');
        return;
      }
      const { url } = await res.json ();'
      window.open (url, '_blank');
    }
  }
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  /**
 * update_distribution - Function description;
 */
function update_distribution() {}
    set_distribution (prev => {      const copy = [...prev];
      const item = { ...copy[index] }
      if (item.percent = Number (value)) {}
  $2;
}
      // Check condition;
if (item.label = value) {}
  $2;
}
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      copy[index] = item;

<<<<<<< HEAD:pages_backup/tokenomics.tsx

=======
      copy[index] = item;


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
  function removeDistributionItem(index: number) {
    setDistribution(prev => prev.filter((_, i) => i !== index));
  }

  async function handleShareableLink() {
    const res = await fetch('/api/whitepaper/share', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ markdown: previewMarkdown, publicPreview }),
    });
    if (!res.ok) {
<<<<<<< HEAD:pages/tokenomics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      alert('Failed to create share link');
      return;
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
    const { url } = await res.json();
    await navigator.clipboard.writeText(url);
    alert('Shareable link copied to clipboard');
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD:pages_backup/tokenomics.tsx
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
  const sections = [
    'Executive Summary'
    'Market Context'
    'Utility & Usage'
    'Rewards System'
    'Distribution'
    'Governance Model'
    'Risks + Disclaimers'

=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f





<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const sections = [
    'Executive Summary'
    'Market Context'
    'Utility & Usage'
    'Rewards System'
    'Distribution'
    'Governance Model'
    'Risks + Disclaimers'
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
  ];

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
=======




  const sections = ['
    'Executive Summary''
    'Market Context''
    'Utility & Usage''
    'Rewards System''
    'Distribution''
    'Governance Model''
    'Risks + Disclaimers'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx


<<<<<<< HEAD:pages_backup/tokenomics.tsx
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
              className='px-3 py-1 rounded-md bg-indigo-600 text-white'>;
        <title > Tokenomics Whitepaper Generator</title>;
      </Head>;'
      <div className='space - y-6'>;'
        <div className='flex items - center justify - between'>;'
          <h1 className='text - 2xl font - semibold'>Whitepaper Generator</h1>;'
          <div className='flex items - center gap - 3 text - sm'>;'
            <label className='inline - flex items - center gap - 2'>;
              <input;'
                type='checkbox';
                checked={is_admin}
                on_change={e => setIsAdmin (e.target.checked)}
              />;
              <span > Admin</span>;
            </label>;'
            <label className='inline - flex items - center gap - 2'>;
              <input;'
                type='checkbox';
                checked={public_preview}
                on_change={e => setPublicPreview (e.target.checked)}
              />;
              <span > Public after launch</span>;
            </label>;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
            <button;
              on_click={handleShareableLink}
              className='px - 3 py - 1 rounded - md bg - indigo - 600 text - white';
            >;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
              Create Share Link;
            </button>;
          </div>;
        </div>;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 6'>;
          <div className='space - y-6'>;
            <div className='rounded - lg border p - 4 space - y-4'>;
              <h2 className='font - medium'>Builder Inputs</h2>;
=======
'
        <div className='grid grid - cols - 1 lg:grid - cols - 2 gap - 6'>;'
          <div className='space - y-6'>;'
            <div className='rounded - lg border p - 4 space - y-4'>;'
              <h2 className='font - medium'>Builder Inputs</h2>;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
              <div className='grid grid - cols - 1 md:grid - cols - 2 gap - 4'>;
                <div>;'
                  <label className='text - xs opacity - 70'>Token name</label>;
                  <input;'
                    className='w - full border rounded - md px - 3 py - 2';
                    value={token_name}
                    on_change={e => setTokenName (e.target.value)}
                  />;
                </div>;
                <div>;'
                  <label className='text - xs opacity - 70'>Token supply</label>;
                  <input;'
                    className='w - full border rounded - md px - 3 py - 2';
                    value={token_supply}
                    on_change={e => setTokenSupply (e.target.value)}
                  />;
                </div>;'
                <div className='md:col - span - 2'>;'
                  <label className='text - xs opacity - 70'>Use cases</label>;
                  <textarea;'
                    className='w - full border rounded - md px - 3 py - 2';
                    rows={2}
                    value={use_cases}
                    on_change={e => setUseCases (e.target.value)}
                  />;
                </div>;'
                <div className='md:col - span - 2'>;'
                  <label className='text - xs opacity - 70'>Rewards logic</label>;
                  <textarea;'
                    className='w - full border rounded - md px - 3 py - 2';
                    rows={2}
                    value={rewards_logic}
                    on_change={e => setRewardsLogic (e.target.value)}
                  />;
                </div>;'
                <div className='md:col - span - 2'>;'
                  <label className='text - xs opacity - 70'>Governance logic</label>;
                  <textarea;'
                    className='w - full border rounded - md px - 3 py - 2';
                    rows={2}
                    value={governance}
                    on_change={e => set_governance (e.target.value)}
                  />;
                </div>;
                <div>;'
                  <label className='text - xs opacity - 70'>;
                    Legal jurisdiction;
                  </label>;
                  <select;'
                    className='w - full border rounded - md px - 3 py - 2';
                    value={jurisdiction}
                    on_change={e => set_jurisdiction (e.target.value)}
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                  >;
                    <option value='US'>US</option>;
                    <option value='EU'>EU</option>;
                    <option value='SG'>Singapore</option>;
                    <option value='AE'>UAE</option>;
                  </select>;
                </div>;
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    onChange={e => setLegalReview(e && e.target.checked)}
                  />;
                  <label htmlFor='legalReview' className='text-sm'>;
                <div className='flex items - center gap - 2'>;
                  <input;
                    id='legal_review';
                    type='checkbox';
                    checked={legal_review}
                    on_change={e => setLegalReview (e.target.checked)}
                  />;
                  <label html_for='legal_review' className='text - sm'>;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

                  >;'
                    <option value='US'>US</option>;'
                    <option value='EU'>EU</option>;'
                    <option value='SG'>Singapore</option>;'
                    <option value='AE'>UAE</option>;
                  </select>;
                </div>;

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
                    Submit to Counsel;
                  </label>                </div>;
              </div>;
            </div>;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======

                    className='px-3 py-1 rounded-md bg-gray-900 text-white'>;
            <div className='rounded - lg border p - 4 space - y-3'>;
              <h3 className='font - medium'>Distribution</h3>;
              <div className='space - y-2'>;
                {distribution.map ((item, idx) => (
                  <div;
                    key={idx}
                    className='grid grid - cols - 12 gap - 2 items - center';
                  >;
                    <input;
                      className='col - span - 6 border rounded - md px - 3 py - 2';
                      value={item.label}
                      on_change={e =>;
                        update_distribution (idx, 'label', e.target.value);
                      }
                    />;
                    <input;
                      className='col - span - 4 border rounded - md px - 3 py - 2';
                      type='number';
                      min={0}
                      max={100}
                      value={item.percent}
                      on_change={e =>;
                        update_distribution (idx, 'percent', e.target.value);
                      }
                    />;
                    <button;
                      on_click={() => removeDistributionItem (idx)}
                      className='col - span - 2 px - 3 py - 2 rounded - md bg - rose - 600 text - white';
                    >;
                      Remove;
                    </button>;
                  </div>))}
                <div className='flex items - center justify - between text - xs opacity - 70'>;
                  <span > Total: {total_percent}%</span>;
                  <button;
                    on_click={addDistributionItem}
                    className='px - 3 py - 1 rounded - md bg - gray - 900 text - white';
                  >;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
                    Add allocation;
                  </button>;
                </div>;
              </div>;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx

  const sections = ['
    'Executive Summary''
    'Market Context''
    'Utility & Usage''
    'Rewards System''
    'Distribution''
    'Governance Model''
    'Risks + Disclaimers'
  ];

}'
  const sections = ['Executive SummaryMarket ContextUtility & UsageRewards SystemDistributionGovernance ModelRisks + Disclaimers'],
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
  ];

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  ];

origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
=======




>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
  return (
    <>
      <Head>
        <title>Tokenomics Whitepaper Generator</title>
<<<<<<< HEAD:pages_backup/tokenomics.tsx
      </Head>
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-semibold">Whitepaper Generator</h1>
          <div className="flex items-center gap-3 text-sm">
            <label className="inline-flex items-center gap-2">
=======
      </Head>"
      <div className="space-y-6">"
        <div className="flex items-center justify-between">"
          <h1 className="text-2xl font-semibold">Whitepaper Generator</h1>"
          <div className="flex items-center gap-3 text-sm">"
            <label className="inline-flex items-center gap-2">"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
              <input type="checkbox" checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)} />
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
<div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Whitepaper Generator</h1>
          <div className='flex items-center gap-3 text-sm'>
            <label className='inline-flex items-center gap-2'>
              <input
                type='checkbox'
                checked={isAdmin}
                onChange={e => setIsAdmin(e.target.checked)}
              />
<<<<<<< HEAD:pages/tokenomics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
              <span>Admin</span>
            </label>"
            <label className="inline-flex items-center gap-2">"
              <input type="checkbox" checked={publicPreview} onChange={(e) => setPublicPreview(e.target.checked)} />
              <span>Public after launch</span>
            </label>"
            <button onClick={handleShareableLink} className="px-3 py-1 rounded-md bg-indigo-600 text-white">Create Share Link</button>
          </div>
        </div>
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
          <div className='space-y-6'>
            <div className='rounded-lg border p-4 space-y-4'>
              <h2 className='font-medium'>Builder Inputs</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <div className="rounded-lg border p-4 space-y-4">
              <h2 className="font-medium">Builder Inputs</h2>
=======

"
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">"
          <div className="space-y-6">"
            <div className="rounded-lg border p-4 space-y-4">"
              <h2 className="font-medium">Builder Inputs</h2>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                <div>
                  <label className="text-xs opacity-70">Token name</label>
=======


                <div>"
                  <label className="text-xs opacity-70">Token name</label>"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
                  <input className="w-full border rounded-md px-3 py-2" value={tokenName} onChange={(e) => setTokenName(e.target.value)} />
                </div>
                <div>"
                  <label className="text-xs opacity-70">Token supply</label>"
                  <input className="w-full border rounded-md px-3 py-2" value={tokenSupply} onChange={(e) => setTokenSupply(e.target.value)} />
                </div>"
                <div className="md:col-span-2">"
                  <label className="text-xs opacity-70">Use cases</label>"
                  <textarea className="w-full border rounded-md px-3 py-2" rows={2} value={useCases} onChange={(e) => setUseCases(e.target.value)} />
                </div>"
                <div className="md:col-span-2">"
                  <label className="text-xs opacity-70">Rewards logic</label>"
                  <textarea className="w-full border rounded-md px-3 py-2" rows={2} value={rewardsLogic} onChange={(e) => setRewardsLogic(e.target.value)} />
                </div>"
                <div className="md:col-span-2">"
                  <label className="text-xs opacity-70">Governance logic</label>"
                  <textarea className="w-full border rounded-md px-3 py-2" rows={2} value={governance} onChange={(e) => setGovernance(e.target.value)} />
                </div>
                <div>"
                  <label className="text-xs opacity-70">Legal jurisdiction</label>"
                  <select className="w-full border rounded-md px-3 py-2" value={jurisdiction} onChange={(e) => setJurisdiction(e.target.value)}>"
                    <option value="US">US</option>"
                    <option value="EU">EU</option>"
                    <option value="SG">Singapore</option>"
                    <option value="AE">UAE</option>
                  </select>
                </div>
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD

<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======




<<<<<<< HEAD:pages_backup/tokenomics.tsx
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
                </div>
              </div>
            </div>
"
            <div className="rounded-lg border p-4 space-y-3">"
              <h3 className="font-medium">Distribution</h3>"
              <div className="space-y-2">
                {distribution.map((item, idx) => ("
                  <div key={idx} className="grid grid-cols-12 gap-2 items-center">'"
                    <input className="col-span-6 border rounded-md px-3 py-2" value={item.label} onChange={(e) => updateDistribution(idx, 'label', e.target.value)} />'"
                    <input className="col-span-4 border rounded-md px-3 py-2" type="number" min={0} max={100} value={item.percent} onChange={(e) => updateDistribution(idx, 'percent', e.target.value)} />"
                    <button onClick={() => removeDistributionItem(idx)} className="col-span-2 px-3 py-2 rounded-md bg-rose-600 text-white">Remove</button>
                  </div>
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
                ))}
=======
                ))  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
                <div className="flex items-center justify-between text-xs opacity-70">
                  <span>Total: {totalPercent}%</span>"
                  <button onClick={addDistributionItem} className="px-3 py-1 rounded-md bg-gray-900 text-white">Add allocation</button>
                </div>
              </div>"
              <div className="mt-3">
<<<<<<< HEAD
                <DistributionDonut data={distribution} />
              </div>
            </div>
<<<<<<< HEAD
            <div className='rounded-lg border p-4 space-y-3'>
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
                <div className='flex items-center gap-2'>
                  <input
                    id='legalReview'
                    type='checkbox'
                    checked={legalReview}
                    onChange={e => setLegalReview(e.target.checked)}
                  />
                  <label htmlFor='legalReview' className='text-sm'>
                    Submit to Counsel
                  </label>
                </div>
              </div>
            </div>

<div className='rounded-lg border p-4 space-y-3'>
              <h3 className='font-medium'>Distribution</h3>
              <div className='space-y-2'>
                {distribution.map((item, idx) => (
                  <div
                    key={idx}
                    className='grid grid-cols-12 gap-2 items-center'
                  >
                    <input
                      className='col-span-6 border rounded-md px-3 py-2'
                      value={item.label}
                      onChange={e =>
                        updateDistribution(idx, 'label', e.target.value)
                      }
                    />
                    <input
                      className='col-span-4 border rounded-md px-3 py-2'
                      type='number'
                      min={0}
                      max={100}
                      value={item.percent}
                      onChange={e =>
                        updateDistribution(idx, 'percent', e.target.value)
                      }
                    />
                    <button
                      onClick={() => removeDistributionItem(idx)}
                      className='col-span-2 px-3 py-2 rounded-md bg-rose-600 text-white'
                    >
                      Remove
                    </button>
                  </div>
                ))}
                <div className='flex items-center justify-between text-xs opacity-70'>
                  <span>Total: {totalPercent}%</span>
                  <button
                    onClick={addDistributionItem}
                    className='px-3 py-1 rounded-md bg-gray-900 text-white'
                  >
                    Add allocation
                  </button>
                </div>
              </div>
              <div className='mt-3'>
origin/cursor/automate-test-improve-and-merge-code-2533
                <DistributionDonut data={distribution} />
              </div>
            </div>

<div className='rounded-lg border p-4 space-y-3'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
              <h3 className='font-medium'>Operator Prompt</h3>
              <textarea
                className='w-full border rounded-md px-3 py-2'
                rows={4}
                value={operatorPrompt}
                onChange={e => setOperatorPrompt(e.target.value)}
              />
              <div className='flex gap-3'>
                <button
                  disabled={!isAdmin |isGenerating}
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
                  disabled={!isAdmin || isGenerating}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


                  disabled={!isAdmin || isGenerating}

<<<<<<< HEAD:pages_backup/tokenomics.tsx
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
                  onClick={handleGenerate}
=======
                  onClick={handleGenerate}'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
                  className='px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50'
                >'
                  {isGenerating ? 'Generating…' : 'Generate with GPT'}
                </button>
                <button'
                  onClick={() => setGeneratedMarkdown('')}'
                  className='px-4 py-2 rounded-md border'
                >
<<<<<<< HEAD:pages_backup/tokenomics.tsx
                  Clear AI Draft
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
=======

            <div className="rounded-lg border p-4 space-y-3">
              <h3 className="font-medium">Operator Prompt</h3>
              <textarea className="w-full border rounded-md px-3 py-2" rows={4} value={operatorPrompt} onChange={(e) => setOperatorPrompt(e.target.value)} />
              <div className="flex gap-3">

                <button disabled={!isAdmin || isGenerating} onClick={handleGenerate} className="px-4 py-2 rounded-md bg-indigo-600 text-white disabled:opacity-50">
                  {isGenerating ? 'Generating…' : 'Generate with GPT'  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
                </button>
                <button onClick={() => setGeneratedMarkdown('')} className="px-4 py-2 rounded-md border">Clear AI Draft</button>
              </div>
            </div>
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">Output</h3>
              <div className="flex gap-3">
                <button onClick={() => handleDownload('md')} className="px-3 py-2 rounded-md border">Download .md</button>
                <button onClick={() => handleDownload('pdf')} className="px-3 py-2 rounded-md border">Download PDF</button>
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
            <div className='rounded-lg border p-4 space-y-2'>
              <h3 className='font-medium'>Output</h3>
              <div className='flex gap-3'>
                <button
                  onClick={() => handleDownload('md')}
                  className='px-3 py-2 rounded-md border'
                >
                  Download .md
                </button>
                <button
                  onClick={() => handleDownload('pdf')}
                  className='px-3 py-2 rounded-md border'
                >
                  Download PDF
<<<<<<< HEAD
                </button>              </div>
            </div>
          </div>
          <div className='rounded-lg border p-4'>
=======
                </button>
origin/cursor/automate-test-improve-and-merge-code-2533
              </div>
            </div>
          </div>

<div className='rounded-lg border p-4'>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
            <div className='flex items-center justify-between mb-3'>
              <div className='flex gap-2 overflow-x-auto'>
                {sections.map(s => (
                  <button
                    key={s}
                    onClick={() => setActiveSection(s)}
                    className={`px-3 py-1 rounded-md border ${activeSection === s ? 'bg-gray-900 text-white' : ''}`}
                  >
                    {s}
                  </button>
                ))}
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
            <div className="rounded-lg border p-4 space-y-2">
              <h3 className="font-medium">Output</h3>
              <div className="flex gap-3">
                <button onClick={() => handleDownload('md')} className="px-3 py-2 rounded-md border">Download .md</button>
=======
                  Clear AI Draft;
                </button>'"
                <button onClick={() => setGeneratedMarkdown('')} className="px-4 py-2 rounded-md border">Clear AI Draft</button>
              </div>
            </div>

"
            <div className="rounded-lg border p-4 space-y-2">"
              <h3 className="font-medium">Output</h3>"
              <div className="flex gap-3">'"
                <button onClick={() => handleDownload('md')} className="px-3 py-2 rounded-md border">Download .md</button>'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
                <button onClick={() => handleDownload('pdf')} className="px-3 py-2 rounded-md border">Download PDF</button>
              </div>
            </div>
          </div>
"
          <div className="rounded-lg border p-4">"
            <div className="flex items-center justify-between mb-3">"
              <div className="flex gap-2 overflow-x-auto">
                {sections.map((s) => ('`
                  <button key={s} onClick={() => setActiveSection(s)} className={`px-3 py-1 rounded-md border ${activeSection === s ? 'bg-gray-900 text-white' : ''}`}>{s}</button>

<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
              </div>
<span className="text-xs opacity-60">Auto-updating preview</span>
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              </div>
              <span className="text-xs opacity-60">Auto-updating preview</span>

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
              </div>
              <span className="text-xs opacity-60">Auto-updating preview</span>
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
                ))  } catch (error) {
    console.error("Error:", error);
=======
                ))  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}



              </div>"
<span className="text-xs opacity-60">Auto-updating preview</span>

                ))  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}



              </div>"
              <span className="text-xs opacity-60">Auto-updating preview</span>
<<<<<<< HEAD:pages_backup/tokenomics.tsx
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
            </div>
            <MarkdownPreview markdown={previewMarkdown} activeSection={activeSection} />
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
              </div>
              <span className="text-xs opacity-60">Auto-updating preview</span>
            </div>
            <MarkdownPreview
              markdown={previewMarkdown}
              activeSection={activeSection}
            />
<<<<<<< HEAD:pages/tokenomics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
          </div>
        </div>
      </div>
    </>
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
  )
}

;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
function buildLocalMarkdown(input: {;


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
);

function buildLocalMarkdown(input: {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
);

function buildLocalMarkdown(input: {
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
  tokenName: string;
  tokenSupply: string;
  useCases: string;
  rewardsLogic: string;
  distribution: DistributionItem[];
  governance: string;
  jurisdiction: string;
  legalReview: boolean;
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
}) {;
  const distLines = input.distribution.map((d) => `- ${d.label}: ${d.percent}%`).join('\n');
  const disclaimer = input.legalReview ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.` : '';
<<<<<<< HEAD
  return `# ${input.tokenName} Tokenomics Whitepaper\n\n## Executive Summary\n${input.tokenName} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${input.useCases}.\n\n## Rewards System\n${input.rewardsLogic}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input.tokenSupply}.\n\n## Governance Model\n${input.governance}.\n\n## Risks + Disclaimers\nThis is not financial advice. ${jurisdictionalNote(input.jurisdiction)}${disclaimer}\n`;
=======
  return `# ${input.tokenName} Tokenomics Whitepaper\n\n## Executive Summary\n${input.tokenName} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${input.useCases}.\n\n## Rewards System\n${input.rewardsLogic}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input.tokenSupply}.\n\n## Governance Model\n${input.governance}.\n\n## Risks + Disclaimers\nThis is not financial advice. ${jurisdictionalNote(input.jurisdiction)}${disclaimer}\n`
}
=======
<<<<<<< HEAD
}) {;
  const distLines = input.distribution.map((d) => `- ${d.label}: ${d.percent}%`).join('\n');
  const disclaimer = input.legalReview ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.` : '';
=======
function buildLocalMarkdown() { return null; }`
  const distLines = input.distribution.map((d) => `- ${d.label}: ${d.percent}%`).join('\n');'`
  const disclaimer = input.legalReview ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.` : '';`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
  return `# ${input.tokenName} Tokenomics Whitepaper\n\n## Executive Summary\n${input.tokenName} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${input.useCases}.\n\n## Rewards System\n${input.rewardsLogic}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input.tokenSupply}.\n\n## Governance Model\n${input.governance}.\n\n## Risks + Disclaimers\nThis is not financial advice. ${jurisdictionalNote(input.jurisdiction)}${disclaimer}\n`
}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
}) {
  const distLines = input.distribution
    .map(d => `- ${d.label}: ${d.percent}%`)
    .join('\n');
  const disclaimer = input.legalReview
    ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.`
    : '';
  return `# ${input.tokenName} Tokenomics Whitepaper\n\n## Executive Summary\n${input.tokenName} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI-native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${input.useCases}.\n\n## Rewards System\n${input.rewardsLogic}.\n\n## Distribution\n${distLines}\n\nTotal Supply: ${input.tokenSupply}.\n\n## Governance Model\n${input.governance}.\n\n## Risks + Disclaimers\nThis is not financial advice. ${jurisdictionalNote(input.jurisdiction)}${disclaimer}\n`;
<<<<<<< HEAD:pages/tokenomics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx

function jurisdictionalNote() { return null; }
                    key={s}
                    on_click={() => setActiveSection (s)}'`
                    className={`px - 3 py - 1 rounded - md border ${active_section === s ? 'bg - gray - 900 text - white' : ''}`}
                  >;
                    {s}
                  </button>))}
              </div>;'
              <span className='text - xs opacity - 60'>Auto - updating preview</span>;
            </div>;
            <MarkdownPreview;
              markdown={preview_markdown}
              active_section={active_section}
            />          </div>;
        </div>;
      </div>;
    </>);
;
/**
 * buildLocalMarkdown - Function description;
 */
function buildLocalMarkdown() {}
  const dist_lines = input.distribution;`
    .map (d => `- ${d.label}: ${d.percent}%`);'
    .join ('\n');
  const disclaimer = input.legal_review;`
    ? `\n\n> Submitted for legal review. Draft may change pending counsel feedback.`;'
    : '';`
  return `# ${input.token_name} Tokenomics Whitepaper\n\n## Executive Summary\n${input.token_name} is a utility token powering a freelance AI marketplace.\n\n## Market Context\nAI - native talent markets require aligned incentives and trust minimization.\n\n## Utility & Usage\n${input.use_cases}.\n\n## Rewards System\n${input.rewards_logic}.\n\n## Distribution\n${dist_lines}\n\n_total Supply: ${input.token_supply}.\n\n## Governance Model\n${input.governance}.\n\n## Risks + Disclaimers\n_this is not financial advice. ${jurisdictional_note (input.jurisdiction)}${disclaimer}\n`;
/**
 * jurisdictional_note - Function description;
 */
<<<<<<< HEAD:pages_backup/tokenomics.tsx
function jurisdictional_note() {
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  switch (j) {
    case 'US':;
=======
function jurisdictional_note() {}
  switch (j) {'
    case 'US':;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      return 'The token is intended for utility purposes and not as a security within the meaning of U.S. securities laws.';

function DistributionDonut(): any ({ data }: { data: DistributionItem[] }) {;
  // Simple textual donut placeholder until a chart lib is added;
  const total = data && data.reduce((a, b) => a + b && b.percent, 0) || 1;
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD



=======

<<<<<<< HEAD
=======
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}
;
function jurisdictionalNote(j: string) {;
  switch (j) {;
    case 'US':;
      return 'The token is intended for utility purposes and not as a security within the meaning of U.S. securities laws.';
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
    case 'EU':
return 'Designed for utility under EU frameworks; subject to MiCA and local guidelines as applicable.';
    case 'SG':
      return 'Intended utility token under MAS guidance; prospective purchasers should not view it as capital markets products.';
    case 'AE':
      return 'Intended utility token within relevant UAE free zone guidance; not an investment product.';
    default:
      return 'Intended strictly for utility use.';
  }

<<<<<<< HEAD:pages/tokenomics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
function DistributionDonut({ data }: { data: DistributionItem[] }) {
  // Simple textual donut placeholder until a chart lib is added
  const total = data.reduce((a, b) => a + b.percent, 0) || 1,
  return (
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
    <div className="space-y-1 text-sm">
=======
<<<<<<< HEAD
    <div className="space-y-1 text-sm">
=======
<div className='space-y-1 text-sm'>
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
<div className='space-y-1 text-sm'>
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
      {data.map((d, idx) => (
        <div key={idx} className="flex items-center gap-2">
          <div className="h-2 bg-gray-200 rounded w-full">
            <div className="h-2 bg-indigo-600 rounded" style={{ width: `${(d.percent / total) * 100}%` }} />
          </div>
          <span className="w-48 truncate">{d.label} ({d.percent}%)</span>
<<<<<<< HEAD
=======
    case 'EU':;
      return 'Designed for utility under EU frameworks, subject to MiCA and local guidelines as applicable.',;
    case 'SG':;
      return 'Intended utility token under MAS guidance, prospective purchasers should not view it as capital markets products.',;
    case 'AE':;
      return 'Intended utility token within relevant UAE free zone guidance, not an investment product.',;
    default:;
      return 'Intended strictly for utility use.';
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
function DistributionDonut({ data }: { data: DistributionItem[] }) {
  // Simple textual donut placeholder until a chart lib is added
  const total = data.reduce((a, b) => a + b.percent, 0) || 1,
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

}
;
function jurisdictionalNote() { return null; }
function DistributionDonut({ data }: { data: DistributionItem[] }) {}
  // Simple textual donut placeholder until a chart lib is added;
  const total = data.reduce((a, b) => a + b.percent, 0) || 1,


>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
  return (



function MarkdownPreview(): any ({;
  markdown,;
  activeSection,;
}: {;
  markdown: string;
  activeSection: string;
}) {  // Very lightweight section filter: split by headings;
  const parts = useMemo(() => {;
    const sections = markdown && markdown.split(/\n## /g),;
    const map: Record<string, string> = {};
    sections && sections.forEach((s, i) => {;
      if (i === 0) return; // first is H1;'
      const [titleLine, ...rest] = s && s.split('\n');'
      map[titleLine && titleLine.trim()] = rest && rest.join('\n');


        </div>
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
=======
        </div>
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ))}
    </div>
  );
function MarkdownPreview({
  markdown
  activeSection
}: {
  markdown: string;
  activeSection: string;
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}) {  // Very lightweight section filter: split by headings
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}) {
  // Very lightweight section filter: split by headings
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
}) {
  // Very lightweight section filter: split by headings
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
  const parts = useMemo(() => {
    const sections = markdown.split(/\n## /g)
    const map: Record<string, string> = {}
    sections.forEach((s, i) => {
<<<<<<< HEAD
      if (i === 0) return; // first is H1
      const [titleLine, ...rest] = s.split('\n');
      map[titleLine.trim()] = rest.join('\n');
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======
if (i === 0) return; // first is H1
      const [titleLine, ...rest] = s.split('\n');
      map[titleLine.trim()] = rest.join('\n');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
}) {  // Very lightweight section filter: split by headings;
  const parts = useMemo(() => {;
    const sections = markdown && markdown.split(/\n## /g),;
    const map: Record<string, string> = {};
    sections && sections.forEach((s, i) => {;
      if (i === 0) return; // first is H1;
      const [titleLine, ...rest] = s && s.split('\n');
      map[titleLine && titleLine.trim()] = rest && rest.join('\n');
<<<<<<< HEAD
=======
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    });
=======
    });
<<<<<<< HEAD:pages/tokenomics.tsx
<<<<<<< HEAD
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return map;  }, [markdown]);
  const content = parts[activeSection] |'';

  return (
<<<<<<< HEAD
<<<<<<< HEAD
    <pre className='whitespace-pre-wrap text-sm leading-6'>;
      {content || markdown}
    </pre>;
  );

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======


=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    case 'EU':;
      return 'Designed for utility under EU frameworks; subject to MiCA and local guidelines as applicable.';
    case 'SG':;
      return 'Intended utility token under MAS guidance; prospective purchasers should not view it as capital markets products.';
    case 'AE':;
=======

  const parts = useMemo(() => {}
    const sections = markdown.split(/\n## /g)
    const map: Record<string, string> = {}
    sections.forEach((s, i) => {}
      if (i === 0) return; // first is H1'
      const [titleLine, ...rest] = s.split('\n');'
      map[titleLine.trim()] = rest.join('\n');


    });
    return map;  }, [markdown]);'
  const content = parts[activeSection] |'';

  return (
'
    case 'EU':;'
      return 'Designed for utility under EU frameworks; subject to MiCA and local guidelines as applicable.';'
    case 'SG':;'
      return 'Intended utility token under MAS guidance; prospective purchasers should not view it as capital markets products.';'
    case 'AE':;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
      return 'Intended utility token within relevant UAE free zone guidance; not an investment product.';
    default:;'
      return 'Intended strictly for utility use.';
  }
/**
 * DistributionDonut - Function description;
 */
function DistributionDonut() {}
  // Simple textual donut placeholder until a chart lib is added;
  const total = data.reduce ((a, b) => a + b.percent, 0) || 1;
  return ('
    <div className='space - y-1 text - sm'>;
      {data.map ((d, idx) => ('
        <div key={idx} className='flex items - center gap - 2'>;'
          <div className='h - 2 bg - gray - 200 rounded w - full'>;
            <div;'
              className='h - 2 bg - indigo - 600 rounded';`
              style={{ width: `${(d.percent / total) * 100}%` }}
            />;
          </div>;'
          <span className='w - 48 truncate'>;
            {d.label} ({d.percent}%);
          </span>;
        </div>))}
    </div>);
;
/**
 * MarkdownPreview - Function description;
 */
function MarkdownPreview() { return null; }
  const parts = useMemo (() => {}
    const sections = markdown.split (/\n## /g),
    const map: Record < string, string> = {}
    sections.for_each ((s, i) => {}
      // Check condition;
if (return) {}
  $2;
} // first is H1;'
      const [title_line, ...rest] = s.split ('\n');'
      map[title_line.trim ()] = rest.join ('\n');
    });
    return map;  }, [markdown]);
;'
  const content = parts[active_section] || '';
;
  return ('
<pre className='whitespace - pre - wrap text - sm leading - 6'>;
      {content || markdown}
    </pre>);
;


<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
      ))  } catch (error) {
    console.error("Error:", error);
=======

      ))  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
    return res.status(500).json({ error: "Internal server error" });
  }
}
    </div>;
  );
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/tokenomics.tsx
function MarkdownPreview({ markdown, activeSection }: { markdown: string, activeSection: string }) {
  // Very lightweight section filter: split by headings
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  const parts = useMemo(() => {
=======
function MarkdownPreview({ markdown, activeSection }: { markdown: string, activeSection: string }) {}
  // Very lightweight section filter: split by headings;
  const parts = useMemo(() => {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
    const sections = markdown.split(/\n## /g),
    const map: Record<string, string> = {},
    sections.forEach((s, i) => {}
      if (i === 0) return, // first is H1'
      const [titleLine, ...rest] = s.split('\n'),'
      map[titleLine.trim()] = rest.join('\n')
    }),
    return map;
  }, [markdown]),'
  const content = parts[activeSection] || '',
  return (
<<<<<<< HEAD:pages_backup/tokenomics.tsx
<<<<<<< HEAD
<<<<<<< HEAD
<pre className='whitespace-pre-wrap text-sm leading-6'>
      {content || markdown}
    </pre>
  );

}
}
}
}
}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    <pre className="whitespace-pre-wrap text-sm leading-6">{content || markdown}</pre>
  )
;
function MarkdownPreview({ markdown, activeSection }: { markdown: string, activeSection: string }) {;
  // Very lightweight section filter: split by headings;
  const parts = useMemo(() => {;
    const sections = markdown.split(/\n## /g);
    const map: Record<string, string> = {};
    sections.forEach((s, i) => {;
      if (i === 0) return, // first is H1;
      const [titleLine, ...rest] = s.split('\n');
      map[titleLine.trim()] = rest.join('\n');
    }),;
    return map;
  }, [markdown]);
  const content = parts[activeSection] || '';
  return (;
    <pre className="whitespace-pre-wrap text-sm leading-6">{content || markdown}</pre>;
  );
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======


=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
    return map;
  }, [markdown]);

  const content = parts[activeSection] || '';

  return (
<pre className='whitespace-pre-wrap text-sm leading-6'>
      {content || markdown}
    </pre>
  );
  return (
<pre className='whitespace-pre-wrap text-sm leading-6'>
      {content |markdown}
    </pre>
  );
<<<<<<< HEAD:pages/tokenomics.tsx
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/tokenomics.tsx
=======


'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/tokenomics.tsx
