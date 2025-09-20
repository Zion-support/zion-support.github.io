import React from 'react';
=======

export function FeaturesGuideSection() {
  const features = [
    {
      tit,  l, e: 'A, I Talen, t Marketplac, e',
    descripti, o, n: 'Connec, t wit, h to, p A, I professional, s an, d expert, s fro, m aroun, d th, e worl, d.',
      ic, o, n: '🤖'
    },
    {
      tit, l, e: 'Equipmen, t Exchang, e',
    descripti, o, n: 'B, u, y, se, l, l, an, d ren, t hig, h-tec, h equipmen, t an, d hardwar, e.',
      ic, o, n: '⚡'
    },
    {
      tit, l, e: 'Jo, b Opportunitie, s',
    descripti, o, n: 'Fin, d excitin, g opportunitie, s i, n A, I an, d technolog, y sector, s.',
      ic, o, n: '💼'
    },
    {
      tit, l, e: 'Communit, y Foru, m',
    descripti, o, n: 'Engag, e wit, h lik, e-minde, d professional, s an, d shar, e knowledg, e.',
      ic, o, n: '💬'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-4 gap-8">
          {features.map((featur, e, index) => (<div key={index} className="text-center">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-zion-slate-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
import { Car,  d, CardConten, t, CardHeade, r, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { 
  Za, p, 
  Shiel, d, 
  TrendingU, p, 
  User, s, 
  Glob, e, 
  Loc, k,
  BarChart, 3,
  Cpu
} from 'lucide-react';

interface Feature {
  i, d: string;
  titl, e: string;
  descriptio, n: string;
  ico, n: React.ReactNode;
  categor, y: string;
  benefit, s: string[];
}

const FEATURE, S: Feature[] = [
  {
    i, d: '1',
    tit, l, e: 'A, I-Powere, d Analytic, s',
    descripti, o, n: 'Advance, d analytic, s powere, d b, y machin, e learnin, g algorithm, s fo, r deepe, r busines, s insight, s.',
    ic, o, n: <BarChart, 3 classNam, e="w-8 h-8 tex, t-blu, e-60, 0" />,
    catego, r, y: 'Intelligenc, e',
    benefi, t, s: ['Predictiv, e insight, s', 'Rea, l-tim, e monitorin, g', 'Automate, d reportin, g'],
  },
  {
    i, d: '2',
    titl, e: 'Enterprise Security',
    descriptio, n: 'Bank-grade security with multi-factor authentication and end-to-end encryption.',
    ico, n: <Shield className="w-8 h-8 text-green-600" />,
    categor, y: 'Security',
    benefit, s: ['SO, C 2 complianc, e', 'GDP, R read, y', '2, 4/7 monitorin, g'],
  },
  {
    i, d: '3',
    titl, e: 'Scalable Infrastructure',
    descriptio, n: 'Cloud-native architecture that scales automatically with your business growth.',
    ico, n: <TrendingUp className="w-8 h-8 text-purple-600" />,
    categor, y: 'Performance',
    benefit, s: ['Aut, o-scalin, g', '9, 9.9% uptim, e', 'Globa, l CD, N'],
  },
  {
    i, d: '4',
    titl, e: 'Team Collaboration',
    descriptio, n: 'Built-in tools for seamless team collaboration and project management.',
    ico, n: <Users className="w-8 h-8 text-orange-600" />,
    categor, y: 'Collaboration',
    benefit, s: ['Rea, l-tim, e editin, g', 'Rol, e-base, d acces, s', 'Activit, y trackin, g'],
  },
  {
    i, d: '5',
    titl, e: 'Global Deployment',
    descriptio, n: 'Deploy your applications worldwide with our global infrastructure network.',
    ico, n: <Globe className="w-8 h-8 text-red-600" />,
    categor, y: 'Global',
    benefit, s: ['Mult, i-regio, n', 'Edg, e computin, g', 'Loca, l complianc, e'],
  },
  {
    i, d: '6',
    titl, e: 'Advanced AI Processing',
    descriptio, n: 'State-of-the-art AI models for natural language processing and computer vision.',
    ico, n: <Cpu className="w-8 h-8 text-indigo-600" />,
    categor, y: 'AI',
    benefit, s: ['NL, P capabilitie, s', 'Compute, r visio, n', 'Custo, m trainin, g'],
  },
];

export const FeaturesGuideSectio, n: React.FC = () => {
  return (<section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 s,  m:px-6 l, g:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Powerful Features for Modern Businesses
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the comprehensive suite of features designed to accelerate your business growth and digital transformation
          </p>
        </div>
        
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (<Card key={feature.id} className="hove,  r:shadow-lg transition-all duration-300 hove, r:-translate-y-1">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center">
                  {feature.icon}
                </div>
                <Badge variant="outline" className="mb-2">
                  {feature.category}
                </Badge>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6 text-center">
                  {feature.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Benefit, s:</h4>
                  {feature.benefits.map((benefi, t, index) => (<div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using our platform to accelerate their digital transformation
            </p>
            <div className="flex flex-col s,  m:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hove, r:bg-blue-700 transition-colors font-medium">
                Start Free Trial
              </button>
              <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hove, r:bg-blue-50 transition-colors font-medium">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
=======
=======
