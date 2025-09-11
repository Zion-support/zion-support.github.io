export const metadata = {
  title: 'Blockchain Development & Web3 Solutions | Zion Tech Group',
  description:
    'Build secure, scalable blockchain applications, smart contracts, and Web3 solutions with expert blockchain development services.',
};

export default function BlockchainDevelopmentPage() {
  return (
    <section>
      <h1 style={{ fontSize: 26, fontWeight: 800 }}>
        Blockchain Development & Web3 Solutions
      </h1>
      <p style={{ marginTop: 8, color: '#374151' }}>
        Build the future with secure, scalable blockchain applications, smart
        contracts, and Web3 solutions that revolutionize business processes and
        create new revenue streams.
      </p>

      <div style={{ display: 'grid', gap: 12, marginTop: 16 }}>
        <Item
          title='Smart Contract Development'
          details={[
            'Ethereum, Polygon, BSC smart contracts',
            'Solidity, Rust, and Vyper development',
            'Security auditing and testing',
            'Gas optimization and efficiency',
            'Upgradeable contract patterns',
          ]}
        />
        <Item
          title='DeFi Applications'
          details={[
            'DEX (Decentralized Exchange) development',
            'Yield farming and staking protocols',
            'Lending and borrowing platforms',
            'Automated market makers (AMM)',
            'Cross-chain bridge solutions',
          ]}
        />
        <Item
          title='NFT Marketplaces'
          details={[
            'Custom NFT marketplace development',
            'Minting and metadata management',
            'Royalty and commission systems',
            'Auction and bidding mechanisms',
            'Multi-chain NFT support',
          ]}
        />
        <Item
          title='Web3 Integration'
          details={[
            'Wallet integration (MetaMask, WalletConnect)',
            'Web3 authentication and authorization',
            'IPFS integration for decentralized storage',
            'Oracle integration for real-world data',
            'Multi-signature wallet solutions',
          ]}
        />
        <Item
          title='Enterprise Blockchain'
          details={[
            'Private blockchain networks',
            'Consortium blockchain solutions',
            'Supply chain traceability',
            'Identity management systems',
            'Document verification and notarization',
          ]}
        />
        <Item
          title='Token Economics'
          details={[
            'Tokenomics design and modeling',
            'Token launch and distribution',
            'Governance token implementation',
            'Vesting and lock-up mechanisms',
            'Token utility and use cases',
          ]}
        />
      </div>

      <div
        style={{
          marginTop: 24,
          padding: 20,
          backgroundColor: '#f0fdf4',
          borderRadius: 12,
          border: '1px solid #bbf7d0',
        }}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 700,
            marginBottom: 12,
            color: '#14532d',
          }}
        >
          Why Choose Our Blockchain Services?
        </h3>
        <ul style={{ color: '#166534', lineHeight: 1.6 }}>
          <li>
            • <strong>Security First:</strong> All smart contracts undergo
            rigorous security auditing
          </li>
          <li>
            • <strong>Multi-Chain Expertise:</strong> Ethereum, Polygon, BSC,
            Solana, and more
          </li>
          <li>
            • <strong>Gas Optimization:</strong> Reduce transaction costs by up
            to 70%
          </li>
          <li>
            • <strong>Regulatory Compliance:</strong> Ensure compliance with
            evolving regulations
          </li>
          <li>
            • <strong>24/7 Support:</strong> Ongoing maintenance and monitoring
            services
          </li>
        </ul>
      </div>

      <Pricing />
    </section>
  );
}

function Item({ title, details }: { title: string; details: string[] }) {
  return (
    <div
      style={{
        border: '1px solid #e5e7eb',
        borderRadius: 12,
        padding: 16,
        backgroundColor: '#ffffff',
      }}
    >
      <h3 style={{ fontWeight: 700, color: '#1f2937', marginBottom: 8 }}>
        {title}
      </h3>
      <ul style={{ paddingLeft: 18, color: '#4b5563', margin: 0 }}>
        {details.map(d => (
          <li key={d} style={{ listStyle: 'disc', marginBottom: 4 }}>
            {d}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Pricing() {
  return (
    <div style={{ marginTop: 32 }}>
      <h2
        style={{
          fontSize: 24,
          fontWeight: 700,
          marginBottom: 20,
          color: '#1f2937',
        }}
      >
        Blockchain Development Pricing
      </h2>
      <div
        style={{
          display: 'grid',
          gap: 16,
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        }}
      >
        <Plan
          name='Smart Contract Development'
          price='$5,000–$15,000'
          features={[
            '2-4 weeks development',
            'Basic smart contract',
            'Security audit included',
            'Gas optimization',
            'Deployment and testing',
          ]}
        />
        <Plan
          name='DeFi Application'
          price='$15,000–$50,000'
          features={[
            '6-12 weeks development',
            'Full DeFi protocol',
            'Frontend and backend',
            'Security auditing',
            'Multi-chain deployment',
          ]}
        />
        <Plan
          name='Enterprise Blockchain'
          price='$50,000+'
          features={[
            'Custom blockchain solution',
            'Private network setup',
            'Integration with existing systems',
            'Dedicated blockchain specialist',
            'Ongoing maintenance & support',
          ]}
        />
      </div>

      <div
        style={{
          marginTop: 24,
          textAlign: 'center',
          padding: 20,
          backgroundColor: '#fef3c7',
          borderRadius: 12,
          border: '1px solid #fbbf24',
        }}
      >
        <h3
          style={{
            fontSize: 18,
            fontWeight: 600,
            marginBottom: 8,
            color: '#92400e',
          }}
        >
          Free Blockchain Consultation
        </h3>
        <p style={{ color: '#a16207', marginBottom: 16 }}>
          Get expert advice on your blockchain project. We'll analyze your
          requirements and provide a detailed roadmap with cost estimates and
          timeline.
        </p>
        <div
          style={{
            display: 'flex',
            gap: 12,
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href='tel:+13024640950'
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: '#f59e0b',
              color: 'white',
              textDecoration: 'none',
              borderRadius: 8,
              fontWeight: 600,
            }}
          >
            Schedule Free Consultation
          </a>
          <a
            href='mailto:kleber@ziontechgroup.com'
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: 'transparent',
              color: '#f59e0b',
              textDecoration: 'none',
              borderRadius: 8,
              border: '2px solid #f59e0b',
              fontWeight: 600,
            }}
          >
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
}

function Plan({
  name,
  price,
  features,
}: {
  name: string;
  price: string;
  features: string[];
}) {
  return (
    <div
      style={{
        border: '2px solid #e5e7eb',
        borderRadius: 12,
        padding: 20,
        backgroundColor: '#ffffff',
        position: 'relative',
      }}
    >
      <h4
        style={{
          fontWeight: 700,
          fontSize: 18,
          color: '#1f2937',
          marginBottom: 8,
        }}
      >
        {name}
      </h4>
      <div
        style={{
          color: '#111827',
          fontWeight: 800,
          fontSize: 24,
          marginBottom: 16,
        }}
      >
        {price}
      </div>
      <ul style={{ paddingLeft: 18, color: '#4b5563', marginBottom: 20 }}>
        {features.map(f => (
          <li key={f} style={{ listStyle: 'disc', marginBottom: 6 }}>
            {f}
          </li>
        ))}
      </ul>
      <a
        href='mailto:kleber@ziontechgroup.com?subject=Blockchain Development Services Inquiry'
        style={{
          display: 'inline-block',
          width: '100%',
          textAlign: 'center',
          padding: '12px 16px',
          backgroundColor: '#3b82f6',
          color: 'white',
          textDecoration: 'none',
          borderRadius: 8,
          fontWeight: 600,
        }}
      >
        Get Started
      </a>
    </div>
  );
}
