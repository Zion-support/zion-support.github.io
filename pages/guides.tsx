import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
import React from 'react';
import Head from 'next/head';
ursor/integrate-build-improve-and-re-verify-8f7d
import Link from 'next/link';
import { motion } from 'framer-motion';
import Layout from './components/Layout';
import React from "react";
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Layout from "./components/Layout";
origin/main
origin/automation-improvements-final
import {

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  BookOpen,
  Clock,
  User,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Download,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Shield,
  Zap,
  Brain,
  Globe,
  Smartphone,
  Monitor,
  Server,
  Bot,
  Microscope,
  Layers,
  Workflow,
  FileText,
  Image,
  Video,
  Music,
  Palette,
  Search,
  Filter,
  Settings,
  Wrench,
  Cog,
  Activity,
  PieChart,
  BarChart,
  TrendingUp,
  DollarSign,
  ShoppingCart,
  Home,
  Trash2,
  Camera,
  Heart,
  ClipboardList,
  TreePine,
  Droplets,
  Award,
  Building,
  Rocket,
  Lightbulb,
  Target,
  Users,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  HelpCircle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  Plus,
  Minus,
  ChevronUp,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  Pause,
  Stop,
  SkipForward,
  SkipBack,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  RotateCw,
  RefreshCw,
  Upload,
  Share,
  Copy,
  Edit,
  Trash,
  Save,
  Lock,
  Unlock,
  EyeOff,
  Bell,
  BellOff,
  Star as StarIcon,
  Heart as HeartIcon,
  ThumbsUp,
  ThumbsDown,
  MessageCircle,
  Send,
  Paperclip,
  Smile,
  Frown,
  Meh,
  Laugh,
  Angry,
  Sad,
  Surprised,
  Wink,
  Kiss,
  Tongue,
  Wink2,
  KissWinkHeart,
  KissClosedEyes,
  StuckOutTongue,
  StuckOutTongueWinkingEye,
  StuckOutTongueClosedEyes,
  Disappointed,
  Worried,
  Angry2,
  Rage,
  Cry,
  Scream,
  Confounded,
  Hugging,
  Smirk,
  NoMouth,
  NeutralFace,
  Expressionless,
  Unamused,
  RollingEyes,
  Thinking,
  LyingFace,
  HandOverMouth,
  ShushingFace,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  Sunglasses,
  NerdFace,
  MonocleFace,
  Confused,
  WorriedFace,
  SlightlyFrowningFace,
  OpenMouth,
  Hushed,
  Astonished,
  Flushed,
  PleadingFace,
  FrowningFace,
  AnguishedFace,
  FearfulFace,
  ColdSweat,
  DisappointedRelieved,
  CryFace,
  LoudlyCryingFace,
  ScreamFace,
  StuckOutTongueFace,
  DroolingFace,
  UnamusedFace,
  SweatSmile,
  Sweat,
  WearyFace,
  TiredFace,
  SleepyFace,
  YawningFace,
  DizzyFace,
  ExplodingHeadFace,
  CowboyHatFace2,
  DisguisedFace2,
  SunglassesFace,
  NerdFace2,
  MonocleFace2,
  ConfusedFace,
  WorriedFace2,
  SlightlyFrowningFace2,
  OpenMouthFace,
  HushedFace,
  AstonishedFace,
  FlushedFace,
  PleadingFace2,
  FrowningFace2,
  AnguishedFace2,
  FearfulFace2,
  ColdSweatFace,
  DisappointedRelievedFace,
  CryFace2,
  LoudlyCryingFace2,
  ScreamFace2,
  StuckOutTongueFace2,
  DroolingFace2,
  UnamusedFace2,
  SweatSmileFace,
  SweatFace,
  WearyFace2,
  TiredFace2,
  SleepyFace2,
  YawningFace2,

  DizzyFace2,;

} from "lucide-react";
const guides = [

  {
    id: 1,
    title: "Getting Started with AI Development",
    description:;
      "Learn the fundamentals of AI development and how to build your first AI application.",
    category: "AI Development",
    difficulty: "Beginner",
    read_time: "15 min read",
    author: "Zion Tech Team",
    rating: 4.8,
    students: 1250,
    image: "/images / guides / ai - development.jpg",
    icon: Brain,
    tags: ["AI", "Machine Learning", "Python", "TensorFlow"],
  },
  {
    id: 2,
    title: "Cloud Infrastructure Setup",
    description:;
      "Complete guide to setting up scalable cloud infrastructure for your applications.",
    category: "Cloud Computing",
    difficulty: "Intermediate",
    read_time: "25 min read",
    author: "Cloud Experts",
    rating: 4.9,
    students: 980,
    image: "/images / guides / cloud - infrastructure.jpg",
    icon: Cloud,
    tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
  },
  {
    id: 3,
    title: "Cybersecurity Best Practices",
    description:;
      "Essential cybersecurity practices to protect your applications and data.",
    category: "Security",
    difficulty: "Advanced",
    read_time: "30 min read",
    author: "Security Team",
    rating: 4.7,
    students: 750,
    image: "/images / guides / cybersecurity.jpg",
    icon: Shield,
    tags: ["Security", "Encryption", "Authentication", "Compliance"],
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:;
      "Build cross - platform mobile applications with modern frameworks.",
    category: "Mobile Development",
    difficulty: "Intermediate",
    read_time: "20 min read",
    author: "Mobile Team",
    rating: 4.6,
    students: 1100,
    image: "/images / guides / mobile - development.jpg",
    icon: Smartphone,
    tags: ["React Native", "Flutter", "iOS", "Android"],
  },
  {
    id: 5,
    title: "Database Design & Optimization",
    description:;
      "Learn database design principles and optimization techniques.",
    category: "Database",
    difficulty: "Intermediate",
    read_time: "22 min read",
    author: "Database Team",
    rating: 4.8,
    students: 890,
    image: "/images / guides / database - design.jpg",
    icon: Database,
    tags: ["SQL", "NoSQL", "Performance", "Scaling"],
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    description:;
      "Optimize your web applications for maximum performance and user experience.",
    category: "Performance",
    difficulty: "Advanced",
    read_time: "18 min read",
    author: "Performance Team",
    rating: 4.9,
    students: 650,
    image: "/images / guides / web - performance.jpg",
    icon: Zap,
    tags: ["Performance", "Optimization", "Caching", "CDN"],
  },
];
;
const categories = [;
  { name: "All", count: guides.length, icon: Globe },
  { name: "AI Development", count: 1, icon: Brain },
  { name: "Cloud Computing", count: 1, icon: Cloud },
  { name: "Security", count: 1, icon: Shield },
  { name: "Mobile Development", count: 1, icon: Smartphone },
  { name: "Database", count: 1, icon: Database },
  { name: "Performance", count: 1, icon: Zap },
];
export default function GuidesPage() {

interface GuidesProps {
  className?: string;
}

const Guides: React.FC<GuidesProps> = ({ className }) => {
  return (
    <Layout>;
      <Head>;
        <title > Guides & Tutorials - Zion Tech Group</title>;
        <meta;
          name="description";
          content="Master the latest technologies with our comprehensive guides, tutorials, and best practices from industry experts.";
        />;
      </Head>;
      <div className="min - h-screen bg - gray - 50">;
        {/* Hero Section */}
        <section className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 20">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center max - w-4xl mx - auto";
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h1 className="text - 5xl font - bold mb - 6">;
                Expert Guides & Tutorials;
              </h1>;
              <p className="text - xl mb - 8 text - blue - 100">;
                Master the latest technologies with our comprehensive guides,
                tutorials, and best practices from industry experts.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="#guides";
                  className="bg - white text - blue - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - blue - 50 transition - colors inline - flex items - center";
                >;
                  Browse Guides;
                  <ArrowRight className="ml - 2 w - 5 h - 5" />;
                </Link>;
                <Link;
                  href="#categories";
                  className="border - 2 border - white text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - white hover:text - blue - 600 transition - colors inline - flex items - center";
                >;
                  View Categories;
                  <BookOpen className="ml - 2 w - 5 h - 5" />;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
        {/* Categories Section */}
        <section id="categories" className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl font - bold text - gray - 900 mb - 4">;
                Explore by Category;
              </h2>;
              <p className="text - gray - 600 max - w-2xl mx - auto">;
                Find guides tailored to your specific technology interests and;
                skill level.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 2 md:grid - cols - 4 lg:grid - cols - 7 gap - 4">;
              {categories.map ((category, index) => (
                <motion.div;
                  key={category.name}
                  className="bg - gray - 50 rounded - lg p - 4 text - center hover:bg - blue - 50 hover:border - blue - 200 border - 2 border - transparent transition - all cursor - pointer";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  while_hover={{ scale: 1.05 }}
                >;
                  <category.icon className="w - 8 h - 8 mx - auto mb - 2 text - blue - 600" />;
                  <h3 className="font - semibold text - gray - 900 text - sm mb - 1">;
                    {category.name}
                  </h3>;
                  <p className="text - gray - 500 text - xs">;
                    {category.count} guides;
                  </p>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* Guides Grid */}
        <section id="guides" className="py - 16 bg - gray - 50">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center mb - 12";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl font - bold text - gray - 900 mb - 4">;
                Featured Guides;
              </h2>;
              <p className="text - gray - 600 max - w-2xl mx - auto">;
                Hand - picked guides to help you master the most in - demand;
                technologies.;
              </p>;
            </motion.div>;
            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap - 8">;
              {guides.map ((guide, index) => (
                <motion.div;
                  key={guide.title}
                  className="bg - white rounded - lg shadow - lg overflow - hidden hover:shadow - xl transition - shadow";
                  initial={{ opacity: 0, coordinate_y: 30 }}
                  whileInView={{ opacity: 1, coordinate_y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >;
                  <div className="relative">;
                    <img;
                      src={guide.image}
                      alt={guide.title}
                      className="w - full h - 48 object - cover";
                    />;
                    <div className="absolute top - 4 left - 4 flex gap - 2">;
                      <span className="px - 3 py - 1 rounded - full text - sm font - medium bg - blue - 100 text - blue - 600">;
                        {guide.category}
                      </span>;
                      <span;
                        className={`px - 3 py - 1 rounded - full text - sm font - medium ${
                          guide.difficulty === "Beginner";
                            ? "bg - green - 100 text - green - 600";
                            : guide.difficulty === "Intermediate";
                              ? "bg - yellow - 100 text - yellow - 600";
                              : "bg - red - 100 text - red - 600";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
                        }`}
                      >;
                        {guide.difficulty}

                        }`}>;
                        {guide && guide.difficulty}
                      </span>;
                    </div>;
                  </div>;

                  <div className="p-6">;
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">;
                      <div className="flex items-center">;
                        <Clock className="w-4 h-4 mr-1" />;
                        {guide && guide.readTime}
                      </div>;
                      <div className="flex items-center">;
                        <User className="w-4 h-4 mr-1" />;
                        {guide && guide.author}
                      </div>;
                    </div>;

                    <h3 className="text-xl font-bold text-gray-900 mb-2">;
                      {guide && guide.title}
                    </h3>;
                    <p className="text-gray-600 mb-4">{guide && guide.description}</p>;

                    <div className="flex items-center justify-between mb-4">;
                      <div className="flex items-center">;
                        <div className="flex items-center">;
                          {[...Array(5)].map((_, i) => (;

                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math && Math.floor(guide && guide.rating)
                                  ? "text-yellow-400"
                                  : "text-gray-300"
                              }`}
                              fill="currentColor"
                            />;
                          ))}

                        </div>;
                        <span className="ml-2 text-sm text-gray-600">;
                          {guide && guide.rating} ({guide && guide.students} students);
                        </span>;
                      </div>;
                    </div>;

                    <div className="flex flex-wrap gap-2 mb-6">;
                      {guide && guide.tags.map((tag) => (;

                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">;
                          {tag}
                        </span>;
                      ))}

                    </div>;

                    <div className="flex gap-2">;

                      <Link
                        href="#"
                        className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center inline-flex items-center justify-center">;
                        <Play className="w-4 h-4 mr-2" />;
                        Start Guide;
                      </Link>;
                      <Link
                        href="#"
                        className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-flex items-center">;
                        <Download className="w-4 h-4" />;
                      </Link>;
                    </div>;
                  </div>;
                </motion && motion.div>;
              ))}

            </div>;
          </div>;
        </section>;


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">;
          <div className="container mx-auto px-4">;
            <motion&& motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}>;
              <h2 className="text-4xl font-bold mb-6">;
                Ready to Start Learning?;
              </h2>;
              <p className="text-xl mb-8 text-green-100">;
                Join thousands of developers who are already mastering new;
                technologies with our guides.;
              </p>;
              <div className="flex flex-col sm:flex-row gap-4 justify-center">;
                <Link
                  href="#guides"
                  className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors inline-flex items-center">;
                  Browse All Guides;
                  <ArrowRight className="ml-2 w-5 h-5" />;
                </Link>;
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center"
                >
                  Request Custom Guide
                  <ExternalLink className="ml-2 w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
import Layout from '../components/Layout';

export default function GuidesPage() {
  
    >
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Guides
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Comprehensive guides and tutorials for our services
              </p>
            </div>
          </div>
        </section>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
origin/automation-improvements-final
      </div>
    </Layout>
=======
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors inline-flex items-center">;
                  Request Custom Guide;
                  <ExternalLink className="ml-2 w-5 h-5" />;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
=======
                      </span>;
                    </div>;
                  </div>;
                  <div className="p - 6">;
                    <div className="flex items - center justify - between text - sm text - gray - 500 mb - 4">;
                      <div className="flex items - center">;
                        <Clock className="w - 4 h - 4 mr - 1" />;
                        {guide.read_time}
                      </div>;
                      <div className="flex items - center">;
                        <User className="w - 4 h - 4 mr - 1" />;
                        {guide.author}
                      </div>;
                    </div>;
                    <h3 className="text - xl font - bold text - gray - 900 mb - 2">;
                      {guide.title}
                    </h3>;
                    <p className="text - gray - 600 mb - 4">{guide.description}</p>;
                    <div className="flex items - center justify - between mb - 4">;
                      <div className="flex items - center">;
                        <div className="flex items - center">;
                          {[...Array (5)].map ((_, i) => (
                            <Star;
                              key={i}
                              className={`w - 4 h - 4 ${
                                i < Math.floor (guide.rating);
                                  ? "text - yellow - 400";
                                  : "text - gray - 300";
                              }`}
                              fill="current_color";
                            />))}
                        </div>;
                        <span className="ml - 2 text - sm text - gray - 600">;
                          {guide.rating} ({guide.students} students);
                        </span>;
                      </div>;
                    </div>;
                    <div className="flex flex - wrap gap - 2 mb - 6">;
                      {guide.tags.map ((tag) => (
                        <span;
                          key={tag}
                          className="px - 2 py - 1 bg - gray - 100 text - gray - 600 text - xs rounded";
                        >;
                          {tag}
                        </span>))}
                    </div>;
                    <div className="flex gap - 2">;
                      <Link;
                        href="#";
                        className="flex - 1 bg - blue - 600 text - white px - 4 py - 2 rounded - lg font - semibold hover:bg - blue - 700 transition - colors text - center inline - flex items - center justify - center";
                      >;
                        <Play className="w - 4 h - 4 mr - 2" />;
                        Start Guide;
                      </Link>;
                      <Link;
                        href="#";
                        className="px - 4 py - 2 border border - gray - 300 text - gray - 700 rounded - lg font - semibold hover:bg - gray - 50 transition - colors inline - flex items - center";
                      >;
                        <Download className="w - 4 h - 4" />;
                      </Link>;
                    </div>;
                  </div>;
                </motion.div>))}
            </div>;
          </div>;
        </section>;
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - green - 600 to - teal - 600 text - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              className="text - center";
              initial={{ opacity: 0, coordinate_y: 30 }}
              whileInView={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 4xl font - bold mb - 6">;
                Ready to Start Learning?;
              </h2>;
              <p className="text - xl mb - 8 text - green - 100">;
                Join thousands of developers who are already mastering new;
                technologies with our guides.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="#guides";
                  className="bg - white text - green - 600 px - 8 py - 3 rounded - lg font - semibold hover:bg - green - 50 transition - colors inline - flex items - center";
                >;
                  Browse All Guides;
                  <ArrowRight className="ml - 2 w - 5 h - 5" />;
                </Link>;
                <Link;
                  href="/contact";
                  className="border - 2 border - white text - white px - 8 py - 3 rounded - lg font - semibold hover:bg - white hover:text - green - 600 transition - colors inline - flex items - center";
                >;
                  Request Custom Guide;
                  <ExternalLink className="ml - 2 w - 5 h - 5" />;
                </Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}