'use client';
import React from 'react';
import { Helmet  } from 'react-helmet-async';
import { Link  } from 'react-router-dom';
import { Box, Palette, Zap, CheckCircle, ArrowRight, Star, Brain, Layers  } from 'lucide-react';
const Ai3DGenerationPage: React.FC = () => {
  const f eat ures = [
    {
      i con: <Box c las sNa me="w-8 h-8 t e xt-c yan-400" />,
      t itle: 'AI 3D Model Generation',
      description: 'Create stunning 3D models from text descriptions or 2D images using advanced AI',
      benefits: ['10x faster than traditional methods', 'Unlimited creativity', 'Professional quality outp ut']
    },
    {
      i con: <Palette c las sNa me="w-8 h-8 t e xt-p urp le-400" />,
      t itle: 'Intelligent Text uring',
      description: 'AI-powered material and text ure generation for realistic 3D models',
      benefits: ['Photorealistic text ures', 'Automatic UV mapping', 'Material optimiz ation']
    },
    {
      i con: <Zap c las sNa me="w-8 h-8 t e xt-g reen-400" />,
      t itle: 'Real-time Rendering',
      description: 'High-quality 3D rendering with real-time preview and optimiz ation',
      benefits: ['Instant preview', 'GPU acceleration', 'Multiple outp ut formats']
    },
    {
      i con: <Layers c las sNa me="w-8 h-8 t e xt-red-400" />,
      t itle: 'Animation Generation',
      description: 'Create smooth 3D animations and motion graphics with AI a ssistance',
      benefits: ['Automated keyframing', 'Natural motion', 'Export to all formats']
    }
  ];
  const useCases = [
    {
      t itle: 'Product Visuali zation',
      description: 'Create photorealistic 3D models for e-commerce and marketing',
      price: '$199/month',
      f eat ures: ['Product modeling', '360° views', 'AR integration', 'Marketing a ssets']
    },
    {
      t itle: 'Architectural Visuali zation',
      description: 'Generate 3D architectural models and walkthroughs',
      price: '$299/month',
      f eat ures: ['Building models', 'Interior design', 'Landscape design', 'Virtual tours']
    },
    {
      t itle: 'Game Development',
      description: 'Create 3D a ssets and characters for games and VR experiences',
      price: '$399/month',
      f eat ures: ['Character modeling', 'Environment design', 'Asset optimiz ation', 'Game integration']
    },
    {
      t itle: 'Medical Visuali zation',
      description: 'Generate 3D medical models for education and r esearch',
      price: '$499/month',
      f eat ures: ['Anatomical models', 'Surgical planning', 'Educational content', 'Research tools']
    }
  ];
  const stats = [
    { number: '50,000+', l abel: '3D Models Generated', i con: <Box c las sNa me="w-6 h-6 t e xt-c yan-400" /> },
    { number: '95%', l abel: 'C lient S ati sfaction', i con: <Star c las sNa me="w-6 h-6 t e xt-g reen-400" /> },
    { number: '10x', l abel: 'F aster Creation', i con: <Zap c las sNa me="w-6 h-6 t e xt-p urp le-400" /> },
    { number: '24/7', l abel: 'AI Processing', i con: <Brain c las sNa me="w-6 h-6 t e xt-red-400" /> }
  ];
  r etu rn (
    <>
      </><Helmet>
        <t itle>AI 3D Generation - Zion Tech Group</t itle>
        <meta name="description" content="AI 3D Generation services by Zion Tech Group. Professional AI and IT solutions." />
        <meta name="keywords" content="ai-3d-generation, AI solutions, IT services" />
      </Helmet>
    </>
    <>
      </><d iv c las sNa me="m in-h-scre en bg-grad ient-to-br from-s late-900via-p urp le-900to-s late-900">
        </d iv>
        <d iv c las sNa me="c ontainer mx-a uto px-4-py-16">
        </d iv>
          <d iv c las sNa me="t e xt-c entermb-16">
        </d iv>
            <h1 c las sNa me="t e xt-4 xl md:text-6 xl f ont-b old text-w hit em-b-6" />
              <s pan c las sNa me="b g-grad ient-to-r from-c yan-400 to-p urp le-400bg-clip-texttext-transpare-n-t">Ai 3 d Generation
              </s pan>
            </h1>
            <p c las sNa me="t e xt-xl text-gr-a-y-300 m ax-w-3x lmx-a uto" />
    </>
              Professional ai 3 d generation services by Zion Tech Group.
    <>            </p>
          </d iv>
    </>
    <>
          </><d iv c las sNa me="b g-grad ient-to-br from-p urp le-900/50 to-blue-900/50 backdrop-blur-sm border border-p urp le-500/20 rounded-xlp-8text-c ente-r">
        </d iv>
            <h2 c las sNa me="t e xt-2 xl f ont-b old text-w hit em-b-4">C oming S oon</h2>
            <p c las sNa me="t e xt-gray-300mb-6" />
    </>
              We're working on bringing you comprehensive ai 3 d generation solutions.               Contact us to learn more about our services.
    <>
            </p>
            <b utt on c las sNa me="b g-grad ient-to-r from-c yan-500 to-p urp le-500 text-w hit-e px-8 py-3 rounded-lg f ont-semibold hover:from-c yan-600 hover:to-p urp le-600 transition-all duration-300">
              Contact Us
            </b utt on>
          </d iv>
      </d iv>
        </d iv>      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>
    </>
  );
};
export default Ai3 dGenerationPage;
    </>