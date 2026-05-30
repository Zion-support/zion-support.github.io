const fs = require('fs');
const path = require('path');

const pages = [
  { dir: 'security-services', title: 'Security Services', icon: '🔐', color1: '#ef4444', color2: '#991b1b', desc: 'Comprehensive cybersecurity and threat protection', details: 'API Gateway Shield, Identity Governance Platform, Threat Intelligence Platform, Data Loss Prevention Suite' },
  { dir: 'cloud-services', title: 'Cloud Services', icon: '☁️', color1: '#06b6d4', color2: '#0e7490', desc: 'Scalable cloud infrastructure and platforms', details: 'Observability Platform, Serverless Orchestration Service, Multi-Cloud Networking Hub' },
  { dir: 'data-services', title: 'Data Services', icon: '📊', color1: '#10b981', color2: '#047857', desc: 'Data analytics, warehousing, and business intelligence', details: 'Stream Processing Engine, Data Pipeline Orchestration, Real-time Analytics Platform' },
  { dir: 'automation', title: 'Automation', icon: '🤖', color1: '#f59e0b', color2: '#b45309', desc: 'Workflow automation and intelligent orchestration', details: 'RPA Orchestrator, Workflow Intelligence Platform, Process Mining Engine' },
  { dir: 'devops', title: 'DevOps & Platform', icon: '⚙️', color1: '#8b5cf6', color2: '#5b21b6', desc: 'CI/CD pipelines and platform engineering', details: 'Infrastructure as Code, Container Orchestration, Monitoring & Observability' },
  { dir: 'blockchain', title: 'Blockchain & Web3', icon: '⛓️', color1: '#ec4899', color2: '#9d174d', desc: 'Smart contracts and decentralized applications', details: 'Smart Contract Development, DeFi Protocols, NFT Platforms, DAO Governance' },
  { dir: 'iot', title: 'IoT & Edge', icon: '📡', color1: '#14b8a6', color2: '#0f766e', desc: 'Internet of Things and edge computing platforms', details: 'Device Management, Edge Analytics, IoT Security, Real-time Telemetry' },
  { dir: 'email-intelligence', title: 'Email Intelligence', icon: '📧', color1: '#6366f1', color2: '#3730a3', desc: 'AI-powered email intelligence engines V199-V390', details: '192 cutting-edge email intelligence engines including Sentiment Analysis, Meeting Intelligence, Compliance Guardian, and more' },
];

const template = (p) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${p.title} | Zion Tech Group</title>
    <meta name="description" content="${p.desc}. Professional ${p.title.toLowerCase()} from Zion Tech Group.">
    <style>
        body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;margin:0;padding:0;background:linear-gradient(135deg,${p.color1} 0%,${p.color2} 100%);min-height:100vh}
        .container{max-width:1200px;margin:0 auto;padding:40px 20px}
        .header{text-align:center;color:#fff;margin-bottom:60px}
        .header h1{font-size:3.5rem;margin:0;text-shadow:2px 2px 4px rgba(0,0,0,.3)}
        .header p{font-size:1.3rem;margin-top:20px;opacity:.95}
        .back-link{color:#fff;text-decoration:none;font-size:1.1rem;display:inline-block;margin-bottom:30px}
        .back-link:hover{text-decoration:underline}
        .card{background:#fff;border-radius:16px;padding:40px;box-shadow:0 10px 40px rgba(0,0,0,.2)}
        .card h2{color:${p.color1};font-size:2rem;margin-top:0}
        .card p{color:#555;line-height:1.8;font-size:1.1rem}
        .contact{background:#f8f9ff;padding:30px;border-radius:12px;margin-top:30px}
        .contact h3{color:${p.color1};margin-top:0}
        .contact p{margin:10px 0;color:#555}
        .cta-button{display:inline-block;background:linear-gradient(135deg,${p.color1} 0%,${p.color2} 100%);color:#fff;padding:15px 40px;border-radius:30px;text-decoration:none;font-weight:600;margin-top:30px;box-shadow:0 4px 15px ${p.color1}66}
        .cta-button:hover{transform:translateY(-2px);box-shadow:0 6px 20px ${p.color1}99}
    </style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">← Back to Home</a>
        <div class="header">
            <h1>${p.icon} ${p.title}</h1>
            <p>${p.desc}</p>
        </div>
        <div class="card">
            <h2>Explore Our ${p.title}</h2>
            <p>Discover our comprehensive collection of ${p.title.toLowerCase()}. Our solutions include ${p.details} and much more.</p>
            <p>All services are designed to be production-ready, scalable, and backed by expert support from our team.</p>
            <div class="contact">
                <h3>📞 Get in Touch</h3>
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Email:</strong> <a href="mailto:kleber@ziontechgroup.com">kleber@ziontechgroup.com</a></p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
            <a href="/services/" class="cta-button">Browse All Services →</a>
        </div>
    </div>
</body>
</html>`;

pages.forEach(p => {
  const dir = path.join(__dirname, 'public', p.dir);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), template(p));
  console.log(`Created public/${p.dir}/index.html`);
});
