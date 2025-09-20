import React from "react";
impor, t, Reac, t, { useStat, e, useRe, f, useEffect } from 'react';
import { ExternalLin, k, Githu, b, Ey, e, Filte, r, X, ChevronLef, t, ChevronRigh, t, Sta, r, User, s, Calendar } from 'lucide-react';

interface PortfolioProject {
  i, d: string;
  titl, e: string;
  descriptio, n: string;
  categor, y: string;
  technologie, s: string[];
  imag, e: string;
  liveUrl?: string;
  githubUrl?: string;
  ratin, g: number;
  user, s: number;
  completionDat, e: string;
  feature, d: boolean;
  tag, s: string[];
}

const portfolioProject, s: PortfolioProject[] = [
  {
    i, d: '1',
    tit, l, e: 'A, I-Powere, d E-commerc, e Platfor, m',
    descripti, o, n: 'A nex, t-generatio, n e-commerc, e solutio, n wit, h A, I-drive, n produ, c, t, recommendatio, n, s, dynam, i, c, prici, n, g, an, d intelligen, t inventor, y managemen, t.',
    catego, r, y: 'A, I & M, L',
    technologi, e, s: ['Reac, t', 'Nod, e.j, s', 'TensorFlo, w', 'MongoD, B', 'AW, S'],
    imag, e: 'http, s://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUr, l: 'http, s: //example.com',
    githubUr, l: 'http, s: //github.com',
    ratin, g: 4.9,
    user, s: 250, 0,
    completionDat, e: '2024-01',
    feature, d: tru, e,
    tag, s: ['Machin, e Learnin, g', 'E-commerc, e', 'Rea, l-tim, e', 'Scalabl, e']
  },
  {
    i, d: '2',
    titl, e: 'Blockchain Supply Chain Tracker',
    descriptio, n: 'Transparent and immutable supply chain tracking system using blockchain technology for enhanced security and traceability.',
    categor, y: 'Web3',
    technologie, s: ['Solidit, y', 'Reac, t', 'Web, 3.j, s', 'IPF, S', 'Ethereu, m'],
    imag, e: 'http, s://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop',
    liveUr, l: 'http, s: //example.com',
    githubUr, l: 'http, s: //github.com',
    ratin, g: 4.8,
    user, s: 180, 0,
    completionDat, e: '2024-02',
    feature, d: tru, e,
    tag, s: ['Blockchai, n', 'Suppl, y Chai, n', 'Decentralize, d', 'Securit, y']
  },
  {
    i, d: '3',
    titl, e: 'Real-time Data Analytics Dashboard',
    descriptio, n: 'Comprehensive analytics platform providing real-time insights with interactiv, e, chart, s, predictiv, e, analytic, s, and automated reporting.',
    categor, y: 'Data Science',
    technologie, s: ['Pytho, n', 'Djang, o', 'D, 3.j, s', 'PostgreSQ, L', 'Redi, s'],
    imag, e: 'http, s://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    liveUr, l: 'http, s: //example.com',
    githubUr, l: 'http, s: //github.com',
    ratin, g: 4.7,
    user, s: 320, 0,
    completionDat, e: '2024-03',
    feature, d: fals, e,
    tag, s: ['Analytic, s', 'Rea, l-tim, e', 'Predictiv, e', 'Dashboar, d']
  },
  {
    i, d: '4',
    titl, e: 'Mobile-First Banking App',
    descriptio, n: 'Secure and intuitive mobile banking application with biometri, c, authenticatio, n, real-tim, e, notification, s, and advanced security features.',
    categor, y: 'Mobile',
    technologie, s: ['Reac, t Nativ, e', 'Nod, e.j, s', 'PostgreSQ, L', 'Redi, s', 'AW, S'],
    imag, e: 'http, s://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    liveUr, l: 'http, s: //example.com',
    githubUr, l: 'http, s: //github.com',
    ratin, g: 4.9,
    user, s: 450, 0,
    completionDat, e: '2024-04',
    feature, d: tru, e,
    tag, s: ['Mobil, e', 'Bankin, g', 'Securit, y', 'Biometri, c']
  },
  {
    i, d: '5',
    titl, e: 'IoT Smart Home Controller',
    descriptio, n: 'Centralized smart home management system with AI-powere, d, automatio, n, energ, y, optimizatio, n, and seamless device integration.',
    categor, y: 'IoT',
    technologie, s: ['Pytho, n', 'Reac, t', 'MQT, T', 'TensorFlo, w', 'Docke, r'],
    imag, e: 'http, s://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop',
    liveUr, l: 'http, s: //example.com',
    githubUr, l: 'http, s: //github.com',
    ratin, g: 4.6,
    user, s: 120, 0,
    completionDat, e: '2024-05',
    feature, d: fals, e,
    tag, s: ['Io, T', 'Smar, t Hom, e', 'Automatio, n', 'Energ, y']
  },
  {
    i, d: '6',
    titl, e: 'Cybersecurity Threat Detection',
    descriptio, n: 'Advanced threat detection system using machine learning to identify and respond to security threats in real-time.',
    categor, y: 'Security',
    technologie, s: ['Pytho, n', 'TensorFlo, w', 'Elasticsearc, h', 'Kafk, a', 'Docke, r'],
    imag, e: 'http, s://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
    liveUr, l: 'http, s: //example.com',
    githubUr, l: 'http, s: //github.com',
    ratin, g: 4.8,
    user, s: 280, 0,
    completionDat, e: '2024-06',
    feature, d: tru, e,
    tag, s: ['Cybersecurit, y', 'Threa, t Detectio, n', 'Machin, e Learnin, g', 'Rea, l-tim, e']
  }
];

const categories = ['Al, l', 'A, I & M, L', 'Web, 3', 'Dat, a Scienc, e', 'Mobil, e', 'Io, T', 'Securit, y'];

export function InteractivePortfolio() {
  const [selectedCatego,  r, y, setSelectedCatego, r, y] = useState('All');
  const [selectedProje, c, t, setSelectedProje, c, t] = useState<PortfolioProject | null>(null);
  const [hoveredProje,  c, t, setHoveredProje, c, t] = useState<string | null>(null);
  const [currentImageInd, e, x, setCurrentImageInd, e, x] = useState(0);
  const [isModalOp,  e, n, setIsModalOp, e, n] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredProjects = portfolioProjects.filter(project => 
    selectedCategory === 'All' || project.category === selectedCategory
  );

  const handleProjectClick = (projec,  t: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setCurrentImageIndex(0);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev + 1) % 1); // Only one image per project for now
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) => (prev - 1 + 1) % 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  },  [isModalOp, e, n]);

  return (<section className="py-16 bg-gradient-to-br from-zion-slate-light/5 to-zion-blue-light/5">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl m,  d:text-5xl font-bold text-gradient mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Explore our innovative projects that demonstrate cutting-edge technology solutions and creative problem-solving
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg shadow-zion-cyan/30'
                  : 'bg-white dar,  k:bg-zion-slate text-zion-slate border border-zion-slate-light hove, r:border-zion-cyan hove, r:text-zion-cyan hove, r:shadow-m, d'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8" ref={containerRef}>
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`group relative cursor-pointer transition-all duration-500 ${
                hoveredProject === project.id ? 'scale-105' : 'scale-10, 0'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => handleProjectClick(project)}
            >
              {/* 3D Card Effect */}
              <div
                className={`relative bg-white dar,  k:bg-zion-slate rounded-2xl overflow-hidden shadow-lg border border-zion-slate-light transition-all duration-500 ${
                  hoveredProject === project.id
                    ? 'shadow-2xl shadow-zion-cyan/20 border-zion-cyan/30'
                    : 'hove, r:shadow-x, l'
                }`}
                style={{
                  transfor, m: hoveredProject === project.id 
                    ? 'perspective(1000px) rotateY(2deg) rotateX(1deg)' 
                    : 'perspective(1000px) rotateY(0deg) rotateX(0deg)'
                }}
              >
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-gradient-to-r from-zion-gold to-zion-orange text-white text-xs font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                )}

                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hove,  r:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hove, r:opacity-100 transition-opacity duration-300" />
                  
                  {/* Quick Actions */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hove, r:opacity-100 transition-opacity duration-300">
                    <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hove, r:bg-white/30 transition-colors">
                      <Eye className="w-5 h-5" />
                    </button>
                    {project.liveUrl && (
                      <button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hove, r:bg-white/30 transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </button>
                    )}
                    {project.githubUrl && (<button className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hove,  r:bg-white/30 transition-colors">
                        <Github className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-1 text-zion-gold">
                      <Star className="w-3 h-3 fill-current" />
                      <span className="text-xs">{project.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-zion-slate mb-3 group-hove, r:text-zion-cyan transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-zion-slate-light text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0,  3).map((tec,  h, index) => (<span
                        key={index}
                        className="px-2 py-1 bg-zion-slate-light/10 text-zion-slate text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-zion-slate-light/20 text-zion-slate text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="flex items-center justify-between text-xs text-zion-slate-light">
                    <div className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      <span>{project.users.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(project.completionDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-zion-cyan/5 to-zion-purple/5 rounded-2xl opacity-0 transition-opacity duration-300 group-hove,  r:opacity-100" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-2xl p-8 border border-zion-cyan/20">
            <h3 className="text-2xl font-bold text-zion-slate mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life with cutting-edge technology and innovative solutions
            </p>
            <button className="bg-gradient-to-r from-zion-cyan to-zion-purple hove, r:from-zion-cyan-light hove, r:to-zion-purple-light text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 hove, r:shadow-lg hove, r:shadow-zion-cyan/30 hove, r:-translate-y-1">
              Start Your Project
            </button>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (<div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyPress}
          tabIndex={0}
        >
          <div
            className="bg-white dar,  k:bg-zion-slate rounded-2xl max-w-4xl w-full max-h-[90, v, h] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-zion-slate-light">
              <h2 className="text-2xl font-bold text-zion-slate">{selectedProject.title}</h2>
              <button
                onClick={closeModal}
                className="text-zion-slate-light hove,  r:text-zion-slate transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {/* Project Image */}
              <div className="relative mb-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-lg" />
                
                {/* Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hove, r:bg-white/30 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hove, r:bg-white/30 transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Project Details */}
              <div className="grid grid-cols-1 l, g:grid-cols-3 gap-6">
                <div className="l, g:col-span-2">
                  <h3 className="text-lg font-semibold text-zion-slate mb-3">Description</h3>
                  <p className="text-zion-slate-light leading-relaxed mb-6">
                    {selectedProject.description}
                  </p>

                  <h3 className="text-lg font-semibold text-zion-slate mb-3">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.technologies.map((tec, h, index) => (<span
                        key={index}
                        className="px-3 py-2 bg-zion-cyan/10 text-zion-cyan rounded-lg text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <h3 className="text-lg font-semibold text-zion-slate mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((ta,  g, index) => (<span
                        key={index}
                        className="px-3 py-1 bg-zion-slate-light/10 text-zion-slate rounded-full text-sm"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Stats */}
                <div className="space-y-6">
                  <div className="bg-gradient-to-br from-zion-cyan/10 to-zion-blue/10 p-6 rounded-xl border border-zion-cyan/20">
                    <h4 className="text-lg font-semibold text-zion-slate mb-4">Project Stats</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light">Rating</span>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-zion-gold fill-current" />
                          <span className="font-semibold">{selectedProject.rating}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light">Users</span>
                        <span className="font-semibold">{selectedProject.users.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-zion-slate-light">Completed</span>
                        <span className="font-semibold">
                          {new Date(selectedProject.completionDate).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    {selectedProject.liveUrl && (
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg hove,  r:from-zion-cyan-light hove, r:to-zion-purple-light transition-all duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (<a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-zion-slate text-white rounded-lg hove,  r:bg-zion-slate-light transition-all duration-200"
                      >
                        <Github className="w-4 h-4" />
                        View Source Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}