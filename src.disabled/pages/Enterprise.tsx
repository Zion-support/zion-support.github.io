


const Enterprise: React.FC = () => {
  return ('
    <div className='mx - auto max - w-7xl px - 4 py - 12>'
      <h1 className='text - 3xl font - bold text - gray - 900'>Enterprise Solutions</h1>''
      <p className='mt - 4 text - gray - 700'>
        Explore our enterprise - grade AI, cloud, and cybersecurity solutions tailored for large organizations.'
      </p>''
      <ul className='mt - 6 list - disc pl - 6 space - y-2 text - gray - 700'>
        <li > AI - powered analytics and automation</li>
        <li > Cloud modernization and FinOps</li>
        <li > Zero Trust cybersecurity and compliance</li>
        <li > Scalable infrastructure and observability</li>'
      </ul>''
      <a href='/contact' className='mt - 8 inline - block rounded - md bg - blue - 600 px - 5 py - 2.5 text - white hover: bg - blue - 700'>
        Talk to an expert
      </a>
    </div>) }
  );
};