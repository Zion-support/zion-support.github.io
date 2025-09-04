import Link from 'next/link';
import Head from 'next/head';

export default function Marketplace() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.co,m,', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', };
  const marketplaceCategories = [;
    {
      title: "Products"";
      description: "Discover innovative technology products and solutions"";
      icon: "🛍️";
      items: [";
        { name: "AI-Powered Analytics Platform" price: "Starting at $299/month" category: "AI & Analytic,s", },";
        { name: "Cloud Infrastructure Suite" price: "Starting at $199/month" category: "Cloud Computin,g", },";
        { name: "Cybersecurity Monitoring Tool" price: "Starting at $149/month" category: "Securit,y", },";
        { name: "Quantum Computing Simulator" price: "Starting at $499/month" category: "Quantum Computin,g", }
      ];
    },;
    {";
      title: "Talent"";
      description: "Connect with skilled technology professionals"";
      icon: "👥";
      items: [";
        { name: "Senior AI/ML Engineers" price: "$120-180/hour" category: "AI & Machine Learnin,g", },";
        { name: "Cloud DevOps Specialists" price: "$100-150/hour" category: "Cloud & DevOp,s", },";
        { name: "Cybersecurity Experts" price: "$110-170/hour" category: "Cybersecurit,y", },";
        { name: "Quantum Computing Researchers" price: "$150-250/hour" category: "Quantum Computin,g", }
      ];
    },;
    {";
      title: "Equipment"";
      description: "Access cutting-edge technology equipment and hardware"";
      icon: "🔧";
      items: [";
        { name: "High-Performance Servers" price: "Starting a,t $,2,999" category: "Hardwar,e", },";
        { name: "Quantum Computing Hardware" price: "Starting a,t $5,0,000" category: "Quantum Hardwar,e", },";
        { name: "Network Security Appliances" price: "Starting a,t $,1,999" category: "Security Hardwar,e", },";
        { name: "Edge Computing Devices" price: "Starting at $499" category: "IoT & Edg,e", }
      ];
    },;
    {";
      title: "Services"";
      description: "Professional technology services and consulting"";
      icon: "⚙️";
      items: [";
        { name: "Digital Transformation Consulting" price: "$200-300/hour" category: "Consultin,g", },";
        { name: "Cloud Migration Services" price: "$150-250/hour" category: "Cloud Service,s", },";
        { name: "Security Assessment & Auditing" price: "$180-280/hour" category: "Security Service,s", },";
        { name: "Custom Software Development" price: "$120-200/hour" category: "Developmen,t", }
      ];
    }
  ];

  const featuredItems = [;
    {";
      name: "AI Business Intelligence Suite"";
      description: "Comprehensive AI-powered analytics platform for enterprise decision making"";
      price: "$299/month"";
      category: "AI & Analytics";
      ratin,g: 4.,9,;
      reviews: 127, },;
    {";
      name: "Quantum Algorithm Development"";
      description: "Expert quantum computing research and algorithm development services"";
      price: "$200/hour"";
      category: "Quantum Computing";
      ratin,g: 4.,8,;
      reviews: 89, },;
    {";
      name: "Enterprise Security Platform"";
      description: "Advanced cybersecurity monitoring and threat detection system"";
      price: "$199/month"";
      category: "Cybersecurity";
      ratin,g: 4.,9,;
      reviews: 156, }
  ];

  return (;
    <>;
      <Head>;
        <title>Marketplace - Zion Tech Group | Technology Products, Services & Talent</title>";
        <meta name="description" content="Explore Zion Tech Group's marketplace for technology products, professional services, skilled talent, and cutting-edge equipment." />";
        <meta name="keywords" content="technology marketplace, AI products, cloud services, cybersecurity tools, quantum computing, tech talent, equipment" />";
        <link rel="canonical" href={`${contact.site}/marketplace`} />";
        <meta property="og: title" content="Marketplace - Zion Tech Group | Technology Produc,t,s, Services & Talent" />";
        <meta property="og: description" content="Explore Zion Tech Group's marketplace for technology produc,t,s, professional services, skilled talent, and cutting-edge equipment." />";
        <meta property="og: url" content={`${contact.si,t,e}/marketplace`} />";
        <meta property="og: type" content="website" />;
      </Head>;

      <div style={{ minHeight: '100v,h,', background: 'linear-gradient(135d,e,g, #0b1220 0%, #1a1f3a 100%)' color: 'whit,e', }}>;
        <div style={{ maxWidth: 120,0, margin: '0 auto' padding: '40px 20p,x', }}>;
          <div style={{ textAlign: 'cente,r,', marginBottom: 60, }}>;
            <h1 style={{ 
              fontSize: '3rem' 
              fontWeigh,t: 80,0, 
              marginBottom: 2,0,;
              background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
              WebkitBackgroundClip: 'tex,t,',;
              WebkitTextFillColor: 'transparen,t,',;
              backgroundClip: 'tex,t', },,}>;
              Technology Marketplace;
            </h1>;
            <p style={{ fontSize: '1.2re,m,', color: '#94a3b8' maxWidt,h: 60,0, margin: '0 aut,o', }}>;
              Discover innovative products, connect with skilled professionals, and access cutting-edge technology solutions all in one place.;
            </p>;
          </div>;

          <div style={{ marginBottom: 80, }}>;
            <h2 style={{ fontSize: '2.5rem' fontWeigh,t: 70,0, marginBottom: 4,0, textAlign: 'cente,r', }}>;
              Featured Items;
            </h2>;
            <div style={{ display: 'grid' gridTemplateColumns: 'repeat(auto-f,i,t, minmax(350px, 1fr))' gap: 30, }}>;
              {featuredItems.map((item, index) => (;
<div key={index} style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
                  borderRadius: 1,2, padding: 3,0, border: '1px solid rgb,a(25,5, 255, 255, 0.1)', transition: 'transform 0.3s ea,s,e, box-shadow 0.3s ease', cursor: 'pointe,r', }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>;
                  <div style={{ marginBottom: 15, }}>;
                    <span style={{
                      background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
                      color: 'white';
                      padding: '4px 12px';
                      borderRadiu,s: 2,0,;
                      fontSize: '0.8rem';
                      fontWeigh,t: 600, }}>;
                      {item.category}
                    </span>;
                  </div>;
                  
                  <h3 style={{ 
                    fontSize: '1.4rem' 
                    fontWeigh,t: 70,0, 
                    marginBottom: 1,5,;
                    lineHeight: 1.3, }}>;
                    {item.name}
                  </h3>;
                  
                  <p style={{ 
                    color: '#94a3b8' 
                    marginBotto,m: 2,0, 
                    lineHeight: 1.,6,;
                    fontSize: '1re,m', }}>;
                    {item.description}
                  </p>;
                  
                  <div style={{ 
                    display: 'flex' 
                    justifyContent: 'space-between' 
                    alignItems: 'center';
                    marginBotto,m: 20, }}>;
                    <div style={{ 
                      fontSize: '1.2rem' 
                      fontWeigh,t: 70,0,;
                      background: 'linear-gradient(135d,e,g, #10b981, #059669)';
                      WebkitBackgroundClip: 'text';
                      WebkitTextFillColor: 'transparent';
                      backgroundClip: 'tex,t', }}>;
                      {item.price}
                    </div>;
                    <div style={{ display: 'flex' alignItems: 'center' ga,p: 5, }}>;
                      <span style={{ color: '#fbb,f24', }}>⭐</span>;
                      <span style={{ fontSize: '0.9rem' color: '#94a3,b8', }}>;
                        {item.rating} ({item.reviews} reviews);
                      </span>;
                    </div>;
                  </div>;
                  ";
                  <Link href="/contact" style={{
                    background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
                    color: 'white';
                    padding: '10px 20px';
                    textDecoration: 'none';
                    borderRadiu,s:,6,;
                    fontSize: '0.9rem';
                    fontWeigh,t: 60,0,;
                    display: 'inline-block';
                    width: '100%';
                    textAlign: 'cente,r', }}>;
                    Learn More;
                  </Link>;
                </div>;
              ))}
            </div>;
          </div>;

          <div style={{ display: 'grid' ga,p: 60, }}>;
            {marketplaceCategories.map((category, categoryIndex) => (;
              <div key={categoryIndex}>;
                <div style={{ display: 'flex' alignItems: 'center' ga,p: 2,0, marginBottom: 30, }}>;
                  <div style={{ fontSize: '3re,m', }}>{category.icon}</div>;
                  <div>;
                    <h2 style={{ fontSize: '2rem' fontWeigh,t: 70,0, marginBottom: 10, }}>;
                      {category.title}
                    </h2>;
                    <p style={{ color: '#94a3,b8,', fontSize: '1.1re,m', }}>;
                      {category.description}
                    </p>;
                  </div>;
                </div>;
                
                <div style={{ display: 'grid' gridTemplateColumns: 'repeat(auto-f,i,t, minmax(280px, 1fr))' gap: 20, }}>;
                  {category.items.map((item, itemIndex) => (;
<div key={itemIndex} style={{ background: 'rgb,a(25,5, 255, 255, 0.05)',;
                      borderRadius: 1,2, padding: 2,5, border: '1px solid rgb,a(25,5, 255, 255, 0.1)', transition: 'transform 0.3s ea,s,e, box-shadow 0.3s ease', cursor: 'pointe,r', }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.2)';
                    }
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}>;
                      <div style={{ marginBottom: 15, }}>;
                        <span style={{
                          background: 'rgb,a(5,9, 130, 246, 0.2)';
                          color: '#3b82f6';
                          padding: '4px 12px';
                          borderRadiu,s: 2,0,;
                          fontSize: '0.8rem';
                          fontWeigh,t: 600, }}>;
                          {item.category}
                        </span>;
                      </div>;
                      
                      <h3 style={{ 
                        fontSize: '1.2rem' 
                        fontWeigh,t: 70,0, 
                        marginBottom: 1,0,;
                        lineHeight: 1.3, }}>;
                        {item.name}
                      </h3>;
                      
                      <div style={{ 
                        fontSize: '1.1rem' 
                        fontWeigh,t: 60,0,;
                        background: 'linear-gradient(135d,e,g, #10b981, #059669)';
                        WebkitBackgroundClip: 'text';
                        WebkitTextFillColor: 'transparent';
                        backgroundClip: 'tex,t', }}>;
                        {item.price}
                      </div>;
                    </div>;
                  ))}
                </div>;
              </div>;
            ))}
          </div>;

          <div style={{ 
            background: 'rgb,a(25,5, 255, 255, 0.05)';
            borderRadius: 1,2,;
            padding: 4,0,;
            border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
            textAlign: 'center';
            marginTo,p: 80, }}>;
            <h2 style={{ fontSize: '2rem' fontWeigh,t: 70,0, marginBottom: 20, }}>;
              Ready to Explore Our Marketplace?;
            </h2>;
            <p style={{ fontSize: '1.1rem' color: '#94a3b8' marginBotto,m: 3,0, maxWidth: 60,0, margin: '0 auto 30p,x', }}>;
              Browse our comprehensive marketplace to find the perfect technology solutions, services, and talent for your business needs.;
            </p>;
            <div style={{ display: 'flex' ga,p: 2,0, justifyContent: 'center' flexWrap: 'wra,p', }}>";
              <Link href="/contact" style={{
                background: 'linear-gradient(135d,e,g, #3b82f6, #8b5cf6)';
                color: 'white';
                padding: '15px 30px';
                textDecoration: 'none';
                borderRadiu,s:,8,;
                fontSize: '1.1rem';
                fontWeigh,t: 60,0,;
                display: 'inline-bloc,k', }}>;
                Browse Marketplace;
              </Link>";
              <Link href="/request-quote" style={{
                background: 'transparent';
                color: 'white';
                padding: '15px 30px';
                textDecoration: 'none';
                borderRadiu,s:,8,;
fontSize: '1.1re,m,',;
fontWeight: 60,0, display: 'inline-bloc,k,', border: '2px solid rgb,a(25,5, 255, 255, 0.3)', transition: 'border-color 0.3s eas,e', }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#3b82f6';
              }
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
              }}>;
                Get Custom Quote;
              </Link>;
            </div>;
          </div>;
        </div>;
      </div>;
    </>;
  );
}
}}}
</div></div></div></div></div></div>"