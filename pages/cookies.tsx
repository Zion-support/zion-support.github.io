import Link from 'next/link';
import Head from 'next/head';

export default function Cookies() {
const contact = { phone: '+1 302 464 0950,', email: 'kleber@ziontechgroup.com', address: '364 E Main St STE 1008 Middletown D,E 19709,', site: 'https://ziontechgroup.co,m', };
  const cookieTypes = [{
      type: "Essential Cookies"";
      description: "These cookies are necessary for the website to function and cannot be switched off in our systems."";
      purpose: "Enable basic website functionality security, and user authentication.";
      examples: [";
        "Session management cookies"";
        "Security and authentication cookies"";
        "Load balancing cookies"";
        "User interface customization cookie,s",],";
      retention: "Session or up to 1 yea,r", },{
      type: "Analytics Cookies"";
      description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site."";
      purpose: "Help us understand how visitors interact with our website by collecting and reporting information anonymously.";
      examples: [";
        "Google Analytics cookies"";
        "Page view tracking"";
        "User behavior analysis"";
        "Performance monitorin,g",],";
      retention: "Up to 2 year,s", },{
      type: "Functional Cookies"";
      description: "These cookies enable enhanced functionality and personalization such as videos and live chat."";
      purpose: "Provide enhanced features and personalization options for a better user experience.";
      examples: [";
        "Language preference cookies"";
        "Chat widget cookies"";
        "Video player cookies"";
        "Form data cookie,s",],";
      retention: "Up to 1 yea,r", },{
      type: "Marketing Cookies"";
      description: "These cookies may be set through our site by our advertising partners to build a profile of your interests."";
      purpose: "Show you relevant advertisements on other websites and measure the effectiveness of our marketing campaigns.";
      examples: [";
        "Advertising network cookies"";
        "Social media tracking cookies"";
        "Remarketing cookies"";
        "Conversion tracking cookie,s",],";
      retention: "Up to 2 year,s", }
  ];

  return (<><Head><title>Cookie Policy - Zion Tech Group | Cookie Usage & Management</title>"<meta name="description" content="Learn about how Zion Tech Group uses cookies on our website, what types of cookies we use, and how you can manage your cookie preferences." />"<meta name="keywords" content="cookie policy, cookies, privacy, data collection, website tracking, user preferences" />"<link rel="canonical" href={`${contact.site}/cookies`} />"<meta property="og: title" content="Cookie Policy - Zion Tech Group | Cookie Usage & Management" />"<meta property="og:description" content="Learn about how Zion Tech Group uses cookies on our website what types of cookies we use, and how you can manage your cookie preferences." />"<meta property="og: url" content={`${contact.site}/cookies`} />"<meta property="og: type" content="website" /></Head><div style={{ minHeight: '100vh', background: 'linear-gradient(135deg #0b1220 0%, #1a1f3a 100%)' color: 'whit,e', }}><div style={{ maxWidth: 1000 margin: '0 auto', padding: '40px 20p,x', }}><div style={{ textAlign: 'center', marginBottom: 60, }}><h1 style={{ 
              fontSize: '3rem' 
              fontWeigh,t: 800 
              marginBottom: 20;
              background: 'linear-gradient(135deg #3b82f6, #8b5cf6)';
              WebkitBackgroundClip: 'text',;
              WebkitTextFillColor: 'transparent',;
              backgroundClip: 'tex,t', },,}>;
              Cookie Policy</h1><p style={{ fontSize: '1.2rem', color: '#94a3b8' maxWidt,h: 600 margin: '0 aut,o', }}>;
              Learn about how we use cookies and similar technologies on our website to enhance your experience.</p></div><div style={{ marginBottom: 60, }}><h2 style={{ fontSize: '2rem' fontWeigh,t: 700 marginBottom: 20, }}>;
              What Are Cookies?</h2><div style={{
              background: 'rgb,a(25,5, 255, 255, 0.05)';
              borderRadius: 12;
              padding: 30;
              border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
              marginBottom: 30, }}><p style={{ fontSize: '1.1rem' lineHeigh,t: 1.6 color: '#94a3,b8', }}>;
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. 
                They are widely used to make websites work more efficiently and to provide information to website owners.</p></div></div><div style={{ marginBottom: 60, }}><h2 style={{ fontSize: '2rem', fontWeight: 700 marginBottom: 30, }}>;
              Types of Cookies We Use</h2><div style={{ display: 'grid' ga,p: 30, }}>{cookieTypes.map((cookie, index) => (<div key={index} style={{
                  background: 'rgb,a(25,5, 255, 255, 0.05)';
                  borderRadius: 12;
                  padding: 30;
                  border: '1px solid rgb,a(25,5, 255, 255, 0.1)'}}><h3 style={{ 
                    fontSize: '1.5rem' 
                    fontWeigh,t: 700 
                    marginBottom: 15;
                    color: '#3b82,f6', }}>{cookie.type}
                  </h3><p style={{ 
                    color: '#94a3b8' 
                    marginBotto,m: 20 
                    lineHeight: 1.6;
                    fontSize: '1.1re,m', }}>{cookie.description}
                  </p><div style={{ marginBottom: 20, }}><h4 style={{ fontSize: '1.2rem' fontWeigh,t: 600 marginBottom: 10 color: '#e5e7e,b', }}>;
                      Purpose: </h4><p style={{ color: '#94a3b8' lineHeigh,t: 1.5, }}>{cookie.purpose}
                    </p></div><div style={{ marginBottom: 20, }}><h4 style={{ fontSize: '1.2rem' fontWeigh,t: 600 marginBottom: 10 color: '#e5e7e,b', }}>;
                      Examples: </h4><ul style={{ color: '#94a3b8' paddingLef,t: 20, }}>{cookie.examples.map((example, exampleIndex) => (<li key={exampleIndex} style={{ marginBottom: 5, }}>{example}
                        </li>;
                      ))}
                    </ul></div><div><h4 style={{ fontSize: '1.2rem' fontWeigh,t: 600 marginBottom: 10 color: '#e5e7e,b', }}>;
                      Retention Period: </h4><p style={{ color: '#94a3,b8', }}>{cookie.retention}
                    </p></div></div>;
              ))}
            </div></div><div style={{ marginBottom: 60, }}><h2 style={{ fontSize: '2rem' fontWeigh,t: 700 marginBottom: 20, }}>;
              Managing Your Cookie Preferences</h2><div style={{
              background: 'rgb,a(25,5, 255, 255, 0.05)';
              borderRadius: 12;
              padding: 30;
              border: '1px solid rgb,a(25,5, 255, 255, 0.1)'}}><p style={{ fontSize: '1.1rem' lineHeigh,t: 1.6 color: '#94a3b8', marginBottom: 20, }}>;
                You have the right to choose whether to accept or reject cookies. You can exercise your cookie rights by 
                setting your preferences in our cookie banner or by adjusting your browser settings.</p><div style={{ marginBottom: 20, }}><h3 style={{ fontSize: '1.3rem' fontWeigh,t: 600 marginBottom: 10 color: '#e5e7e,b', }}>;
                  Browser Settings: </h3><p style={{ color: '#94a3b8' lineHeigh,t: 1.5, }}>;
                  Most web browsers allow you to control cookies through their settings preferences. You can set your 
                  browser to refuse cookies or delete certain cookies. However, if you choose to delete or refuse cookies, 
                  some features of our website may not function properly.</p></div><div><h3 style={{ fontSize: '1.3rem' fontWeigh,t: 600 marginBottom: 10 color: '#e5e7e,b', }}>;
                  Cookie Banner: </h3><p style={{ color: '#94a3b8' lineHeigh,t: 1.5, }}>;
                  When you first visit our website, you will see a cookie banner that allows you to accept or reject 
                  non-essential cookies. You can change your preferences at any time by clicking the cookie settings 
                  link in our website footer.</p></div></div></div><div style={{ marginBottom: 60, }}><h2 style={{ fontSize: '2rem' fontWeigh,t: 700 marginBottom: 20, }}>;
              Third-Party Cookies</h2><div style={{
              background: 'rgb,a(25,5, 255, 255, 0.05)';
              borderRadius: 12;
              padding: 30;
              border: '1px solid rgb,a(25,5, 255, 255, 0.1)'}}><p style={{ fontSize: '1.1rem' lineHeigh,t: 1.6 color: '#94a3b8', marginBottom: 20, }}>;
                Some cookies on our website are set by third-party services that appear on our pages. These third parties 
                may use cookies to collect information about your online activities across different websites.</p><div style={{ display: 'grid', gap: 15, }}><div style={{ display: 'flex' alignItems: 'center' ga,p: 10, }}><div style={{ width:  6 height:  6 background: '#3b82f6' borderRadiu,s: '50%', }} /><span style={{ color: '#94a3,b8', }}>Google Analytics - Website analytics and performance monitoring</span></div><div style={{ display: 'flex' alignItems: 'center' ga,p: 10, }}><div style={{ width:  6 height:  6 background: '#3b82f6' borderRadiu,s: '50%', }} /><span style={{ color: '#94a3,b8', }}>Social Media Platforms - Social sharing and engagement tracking</span></div><div style={{ display: 'flex' alignItems: 'center' ga,p: 10, }}><div style={{ width:  6 height:  6 background: '#3b82f6' borderRadiu,s: '50%', }} /><span style={{ color: '#94a3,b8', }}>Advertising Networks - Targeted advertising and campaign measurement</span></div></div></div></div><div style={{ 
            background: 'rgb,a(25,5, 255, 255, 0.05)';
            borderRadius: 12;
            padding: 30;
            border: '1px solid rgb,a(25,5, 255, 255, 0.1)';
            textAlign: 'cente,r', },,}><h2 style={{ fontSize: '1.5rem', fontWeight: 700 marginBottom: 15, }}>;
              Questions About Our Cookie Policy?</h2><p style={{ color: '#94a3b8', marginBottom: 20, }}>;
              If you have any questions about our use of cookies or this Cookie Policy, please contact us.</p>"<Link href="/contact" style={{
              background: 'linear-gradient(135deg #3b82f6, #8b5cf6)';
              color: 'white',;
              padding: '12px 24px',;
              textDecoration: 'none',;
              borderRadius:  8;
              fontSize: '1rem';
              fontWeigh,t: 600;
              display: 'inline-bloc,k', }}>;
              Contact Us</Link></div></div></div></>;
  )}
</div></div></div></div></div></div></div></div></div>"