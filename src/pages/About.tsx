
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import Link from "next/link";

const InfoCard: React.FC<{ children: React.ReactNode }> = memo(({ children }) => (
  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
    {children}
  </div>
));

InfoCard.displayName = 'InfoCard';

const About: React.FC = memo(() => {  const features = [
    'Expert team with years of industry experience',
    'Cutting-edge AI and machine learning solutions',
    'Comprehensive IT support and cybersecurity',
    'Scalable micro SAAS platforms',
    '24/7 customer support and monitoring'
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '50+' }
  ];

  return (
    <>
      <SEO 
        title="About Zion - The Future of AI & Tech Marketplace" 
        description="Learn about Zion's mission to create the first free marketplace dedicated to high-tech and artificial intelligence." 
        keywords="about Zion, AI marketplace, tech platform, mission, vision, team"
        canonical="https://ziontechgroup.com/about"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>About Zion</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              The world's first free marketplace dedicated to high-tech and artificial intelligence
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-zion-purple rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Quality Assured</h3>
            <p className="text-zion-slate-light">
              Every solution undergoes rigorous testing and quality assurance to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="w-16 h-16 bg-zion-green rounded-lg flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Expert Team</h3>
            <p className="text-zion-slate-light">
              Our team of industry experts brings decades of experience in technology, innovation, and business solutions.
            </p>
          </div>
        </div>

        <div className="content-section text-center">
          <p className="text-zion-slate-light text-lg">
            Ready to work with us? Explore our{' '}
            <Link href="/services"><a className="text-zion-cyan underline">AI & IT services</a></Link>{' '}
            or <Link href="/contact"><a className="text-zion-cyan underline">get in touch</a></Link>. For the latest updates, visit our{' '}
            <Link href="/blog"><a className="text-zion-cyan underline">blog</a></Link>.
          </p>
        </div>
      </div>
    </div>
  );
});

About.displayName = 'About';

export default About;