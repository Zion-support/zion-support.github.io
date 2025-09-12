
import { _motion  } from 'framer-motionimport { _Link } from react-router-domimport {Brain,';
  Shield,
  Cloud,
  Database,
  Globe,
  Zap,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Clock,
  CheckCircle,
  Search} from lucide-reactexport const EnhancedServicesShowcase: Reac t.FC = () => {';
  const _services = [{';';
      title: AI Workflow Automation,'';';
      description: 'Transform business operations with intelligent automation that learns and scales',';';
      price: 'From $299/month',';';
      path: '/services/ai-workflow-automation',';
              icon: GitFor k,';';
      category: 'AI & Automation',';';
      features: ['Process optimization', 'AI-powered workflows', 'Real-time analytics', 'Scalable automation'],';';
      benefits: ['Reduce manual work by 70-85%', 'Improve efficiency by 60%', 'Cut operational costs by 40-50%'],';';
      color: 'from-cyan-500 to-blue-600',';';
      glowColor: 'cyan'},';
    {';';
      title: 'AI Cybersecurity',';';
      description: 'Protect your business with AI-powered threat detection and prevention',';';
      price: 'From $499/month',';';
      path: '/services/ai-cybersecurity',';
      icon: Shiel d,';';
      category: 'Security',';';
      features: ['Threat detection', 'Behavioral analytics', 'Automated response', 'Compliance monitoring'],';';
      benefits: ['Detect threats 10x faster', 'Reduce false positives by 85%', 'Prevent 99.9% of attacks'],';';
      color: 'from-purple-500 to-indigo-600',';';
      glowColor: 'purple'},';
    {';';
      title: 'Quantum Computing',';';
      description: 'Solve complex problems 1000x faster with quantum computing solutions',';';
      price: 'From $2,999/month',';';
      path: '/services/quantum-computing-solutions',';
      icon: Ato m,';';
      category: 'Quantum Tech',';';
      features: ['Quantum algorithms', 'ML acceleration', 'Financial modeling', 'Drug discovery'],';';
      benefits: ['1000x faster computation', 'Breakthrough discoveries', 'Unbreakable encryption'],';';
      color: 'from-green-500 to-emerald-600',';';
      glowColor: 'green'},';
    {';';
      title: 'IoT Edge Computing',';';
      description: 'Process data at the edge and reduce latency by 90%',';';
      price: 'From $399/month',';';
      path: '/services/iot-edge-computing',';
      icon: Cp u,';';
      category: 'IoT & Edge',';';
      features: ['Edge processing', 'Device management', 'Real-time analytics', 'AI at the edge'],';';
      benefits: ['Reduce latency by 90%', 'Cut bandwidth costs by 60-80%', 'Scale to millions of devices'],';';
      color: 'from-orange-500 to-red-600',';';
      glowColor: 'orange'},';
    {';';
      title: 'Cloud & DevOps',';';
      description: 'Build, deploy, and scale with enterprise-grade cloud infrastructure',';';
      price: 'From $799/month',';';
      path: '/services/cloud-devops',';
      icon: Clou d,';';
      category: 'Infrastructure',';';
      features: ['Cloud migration', 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],';';
      benefits: ['Faster deployments', 'Improved reliability', 'Cost optimization', 'Scalability'],';';
      color: 'from-blue-500 to-cyan-600',';';
      glowColor: 'blue'},';
    {';';
      title: 'AI Sales Copilot',';';
      description: 'Automate sales processes and boost conversion rates with AI',';';
      price: 'From $1,500/month',';';
      path: '/services/ai-sales-copilot',';
      icon: Brai n,';';
      category: 'Sales AI',';';
      features: ['Lead scoring', 'CRM automation', 'Sales analytics', 'Predictive insights'],';';
      benefits: ['Reduce admin time by 40-60%', 'Improve conversion rates', 'Shorten sales cycles'],';';
      color: 'from-pink-500 to-rose-600',';';import { _motion } from 'framer-motionimport { _Link } from react-router-domimport {Brain,';
  Shield,;
  Cloud,;
  Database,;
  Globe,;
  Zap,;
  ArrowRight,;
  Star,;
  TrendingUp,;
  Users,;
  Clock,;
  CheckCircle,;
  Search} from lucide-reactexport const "EnhancedServicesShowcase": "React.FC = () => {;
  const _services = [{;
      "title": AI Workflow Automation",';
      "description": 'Transform business operations with intelligent automation that learns and scales',;
      "price": 'From $299/month',;
      "path": '/services/ai-workflow-automation',;
              "icon": "GitFor k",;
      "category": 'AI & Automation',;
      "features": "['Process optimization'", 'AI-powered workflows', 'Real-time analytics', 'Scalable automation'],;
      "benefits": "['Reduce manual work by 70-85%'", 'Improve efficiency by 60%', 'Cut operational costs by 40-50%'],;
      "color": 'from-cyan-500 to-blue-600',;
      "glowColor": 'cyan'},;
    {;
      "title": 'AI Cybersecurity',;
      "description": 'Protect your business with AI-powered threat detection and prevention',;
      "price": 'From $499/month',;
      "path": '/services/ai-cybersecurity',;
      "icon": "Shiel d",;
      "category": 'Security',;
      "features": "['Threat detection'", 'Behavioral analytics', 'Automated response', 'Compliance monitoring'],;
      "benefits": "['Detect threats 10x faster'", 'Reduce false positives by 85%', 'Prevent 99.9% of attacks'],;
      "color": 'from-purple-500 to-indigo-600',;
      "glowColor": 'purple'},;
    {;
      "title": 'Quantum Computing',;
      "description": 'Solve complex problems 1000x faster with quantum computing solutions',;
      "price": 'From $2,999/month',;
      "path": '/services/quantum-computing-solutions',;
      "icon": "Ato m",;
      "category": 'Quantum Tech',;
      "features": "['Quantum algorithms'", 'ML acceleration', 'Financial modeling', 'Drug discovery'],;
      "benefits": "['1000x faster computation'", 'Breakthrough discoveries', 'Unbreakable encryption'],;
      "color": 'from-green-500 to-emerald-600',;
      "glowColor": 'green'},;
    {;
      "title": 'IoT Edge Computing',;
      "description": 'Process data at the edge and reduce latency by 90%',;
      "price": 'From $399/month',;
      "path": '/services/iot-edge-computing',;
      "icon": "Cp u",;
      "category": 'IoT & Edge',;
      "features": "['Edge processing'", 'Device management', 'Real-time analytics', 'AI at the edge'],;
      "benefits": "['Reduce latency by 90%'", 'Cut bandwidth costs by 60-80%', 'Scale to millions of devices'],;
      "color": 'from-orange-500 to-red-600',;
      "glowColor": 'orange'},;
    {;
      "title": 'Cloud & DevOps',;
      "description": 'Build, deploy, and scale with enterprise-grade cloud infrastructure',;
      "price": 'From $799/month',;
      "path": '/services/cloud-devops',;
      "icon": "Clou d",;
      "category": 'Infrastructure',;
      "features": "['Cloud migration'", 'CI/CD pipelines', 'Infrastructure as code', 'Monitoring & alerting'],;
      "benefits": "['Faster deployments'", 'Improved reliability', 'Cost optimization', 'Scalability'],;
      "color": 'from-blue-500 to-cyan-600',;
      "glowColor": 'blue'},;
    {;
      title: 'AI Sales Copilot',;
      description: 'Automate sales processes and boost conversion rates with AI',;
      price: 'From $1,500/month',;
      path: '/services/ai-sales-copilot',;
      icon: Brai n,;
      category: 'Sales AI',;
      features: ['Lead scoring', 'CRM automation', 'Sales analytics', 'Predictive insights'],;
      benefits: ['Reduce admin time by 40-60%', 'Improve conversion rates', 'Shorten sales cycles'],;
      color: 'from-pink-500 to-rose-600',;
      glowColor: 'pink'}  }
;
const _categories = ['All', 'AI & Analytics', 'Quantum Computing', 'Cybersecurity', 'Cloud & DevOps', 'Data & Analytics', 'Blockchain & Web3']
;
export default function EnhancedServicesShowcase(..."args": "unknow n[]): unknown {  const [selectedCategory", setSelectedCategory] = useState<any>('All');
  const [hoveredService, setHoveredService] = useState<string | null>(null);
</string>;
</any>;export default function EnhancedServicesShowcase(...args: unknow n[]): unknown {  const [selectedCategory, setSelectedCategory] = useState<any>('All')
  const [hoveredService, setHoveredService] = useState<string | null>(null)
</string>
</any>
; import { _motion } from &apos;framer-motionimport { _Link } from react-router-domimport {Brain,Shield,Cloud,Database,Globe,Zap,ArrowRight,Star,TrendingUp,Users,Clock,CheckCircle,Search} from lucide-reactexport const EnhancedServicesShowcase: Reac t.FC = () => { const _services = [{ title: AI Workflow Automation,&apos; description: &apos;Transform business operations with intelligent automation that learns and scales&apos;,price: &apos;From $299/month&apos;,path: &apos;/services/ai-workflow-automation&apos;,icon: GitFor k,category: &apos;AI & Automation&apos;,features: [&apos;Process optimization&apos;,&apos;AI-powered workflows&apos;,&apos;Real-time analytics&apos;,&apos;Scalable automation&apos;],benefits: [&apos;Reduce manual work by 70-85%&apos;,&apos;Improve efficiency by 60%&apos;,&apos;Cut operational costs by 40-50%&apos;],color: &apos;from-cyan-500 to-blue-600&apos;,glowColor: &apos;cyan&apos;},{ title: &apos;AI Cybersecurity&apos;,description: &apos;Protect your business with AI-powered threat detection and prevention&apos;,price: &apos;From $499/month&apos;,path: &apos;/services/ai-cybersecurity&apos;,icon: Shiel d,category: &apos;Security&apos;,features: [&apos;Threat detection&apos;,&apos;Behavioral analytics&apos;,&apos;Automated response&apos;,&apos;Compliance monitoring&apos;],benefits: [&apos;Detect threats 10x faster&apos;,&apos;Reduce false positives by 85%&apos;,&apos;Prevent 99.9% of attacks&apos;],color: &apos;from-purple-500 to-indigo-600&apos;,glowColor: &apos;purple&apos;},{ title: &apos;Quantum Computing&apos;,description: &apos;Solve complex problems 1000x faster with quantum computing solutions&apos;,price: &apos;From $2,999/month&apos;,path: &apos;/services/quantum-computing-solutions&apos;,icon: Ato m,category: &apos;Quantum Tech&apos;,features: [&apos;Quantum algorithms&apos;,&apos;ML acceleration&apos;,&apos;Financial modeling&apos;,&apos;Drug discovery&apos;],benefits: [&apos;1000x faster computation&apos;,&apos;Breakthrough discoveries&apos;,&apos;Unbreakable encryption&apos;],color: &apos;from-green-500 to-emerald-600&apos;,glowColor: &apos;green&apos;},{ title: &apos;IoT Edge Computing&apos;,description: &apos;Process data at the edge and reduce latency by 90%&apos;,price: &apos;From $399/month&apos;,path: &apos;/services/iot-edge-computing&apos;,icon: Cp u,category: &apos;IoT & Edge&apos;,features: [&apos;Edge processing&apos;,&apos;Device management&apos;,&apos;Real-time analytics&apos;,&apos;AI at the edge&apos;],benefits: [&apos;Reduce latency by 90%&apos;,&apos;Cut bandwidth costs by 60-80%&apos;,&apos;Scale to millions of devices&apos;],color: &apos;from-orange-500 to-red-600&apos;,glowColor: &apos;orange&apos;},{ title: &apos;Cloud & DevOps&apos;,description: &apos;Build,deploy,and scale with enterprise-grade cloud infrastructure&apos;,price: &apos;From $799/month&apos;,path: &apos;/services/cloud-devops&apos;,icon: Clou d,category: &apos;Infrastructure&apos;,features: [&apos;Cloud migration&apos;,&apos;CI/CD pipelines&apos;,&apos;Infrastructure as code&apos;,&apos;Monitoring & alerting&apos;],benefits: [&apos;Faster deployments&apos;,&apos;Improved reliability&apos;,&apos;Cost optimization&apos;,&apos;Scalability&apos;],color: &apos;from-blue-500 to-cyan-600&apos;,glowColor: &apos;blue&apos;},{ title: &apos;AI Sales Copilot&apos;,description: &apos;Automate sales processes and boost conversion rates with AI&apos;,price: &apos;From $1,500/month&apos;,path: &apos;/services/ai-sales-copilot&apos;,icon: Brai n,category: &apos;Sales AI&apos;,features: [&apos;Lead scoring&apos;,&apos;CRM automation&apos;,&apos;Sales analytics&apos;,&apos;Predictive insights&apos;],benefits: [&apos;Reduce admin time by 40-60%&apos;,&apos;Improve conversion rates&apos;,&apos;Shorten sales cycles&apos;],color: &apos;from-pink-500 to-rose-600&apos;,glowColor: &apos;pink&apos;}; ]; const _containerVariants = {; hidden: { opacity: 0 },; visible: {; opacity: 1,; transition: {; staggerChildren: 0.1} } } ;&apos;;&apos;; const _categories = [&apos;All&apos;,&apos;AI & Analytics&apos;,&apos;Quantum Computing&apos;,&apos;Cybersecurity&apos;,&apos;Cloud & DevOps&apos;,&apos;Data & Analytics&apos;,&apos;Blockchain & Web3&apos;] ;&apos;;&apos;; export default function EnhancedServicesShowcase(...args: unknow n[]): unknown { const [selectedCategory,setSelectedCategory] = useState<any>(&apos;All&apos;) const [hoveredService,setHoveredService] = useState<string | null>(null) </string> </any>;&apos;;&apos;;
; import { _motion } from "framer-motionimport { _Link } from react-router-domimport {Brain,Shield,Cloud,Database,Globe,Zap,ArrowRight,Star,TrendingUp,Users,Clock,CheckCircle,Search} from lucide-reactexport const EnhancedServicesShowcase: Reac t.FC = () => { const _services = [{ title: AI Workflow Automation," description: "Transform business operations with intelligent automation that learns and scales",price: "From $299/month",path: "/services/ai-workflow-automation",icon: GitFor k,category: "AI & Automation",features: ["Process optimization","AI-powered workflows","Real-time analytics","Scalable automation"],benefits: ["Reduce manual work by 70-85%","Improve efficiency by 60%","Cut operational costs by 40-50%"],color: "from-cyan-500 to-blue-600",glowColor: "cyan"},{ title: "AI Cybersecurity",description: "Protect your business with AI-powered threat detection and prevention",price: "From $499/month",path: "/services/ai-cybersecurity",icon: Shiel d,category: "Security",features: ["Threat detection","Behavioral analytics","Automated response","Compliance monitoring"],benefits: ["Detect threats 10x faster","Reduce false positives by 85%","Prevent 99.9% of attacks"],color: "from-purple-500 to-indigo-600",glowColor: "purple"},{ title: "Quantum Computing",description: "Solve complex problems 1000x faster with quantum computing solutions",price: "From $2,999/month",path: "/services/quantum-computing-solutions",icon: Ato m,category: "Quantum Tech",features: ["Quantum algorithms","ML acceleration","Financial modeling","Drug discovery"],benefits: ["1000x faster computation","Breakthrough discoveries","Unbreakable encryption"],color: "from-green-500 to-emerald-600",glowColor: "green"},{ title: "IoT Edge Computing",description: "Process data at the edge and reduce latency by 90%",price: "From $399/month",path: "/services/iot-edge-computing",icon: Cp u,category: "IoT & Edge",features: ["Edge processing","Device management","Real-time analytics","AI at the edge"],benefits: ["Reduce latency by 90%","Cut bandwidth costs by 60-80%","Scale to millions of devices"],color: "from-orange-500 to-red-600",glowColor: "orange"},{ title: "Cloud & DevOps",description: "Build,deploy,and scale with enterprise-grade cloud infrastructure",price: "From $799/month",path: "/services/cloud-devops",icon: Clou d,category: "Infrastructure",features: ["Cloud migration","CI/CD pipelines","Infrastructure as code","Monitoring & alerting"],benefits: ["Faster deployments","Improved reliability","Cost optimization","Scalability"],color: "from-blue-500 to-cyan-600",glowColor: "blue"},{ title: "AI Sales Copilot",description: "Automate sales processes and boost conversion rates with AI",price: "From $1,500/month",path: "/services/ai-sales-copilot",icon: Brai n,category: "Sales AI",features: ["Lead scoring","CRM automation","Sales analytics","Predictive insights"],benefits: ["Reduce admin time by 40-60%","Improve conversion rates","Shorten sales cycles"],color: "from-pink-500 to-rose-600",glowColor: "pink"}; ]; const _containerVariants = {; hidden: { opacity: 0 },; visible: {; opacity: 1,; transition: {; staggerChildren: 0.1} } } ;";"; const _categories = ["All","AI & Analytics","Quantum Computing","Cybersecurity","Cloud & DevOps","Data & Analytics","Blockchain & Web3"] ;";"; export default function EnhancedServicesShowcase(.args: unknow n[]): unknown { const [selectedCategory,setSelectedCategory] = useState<any>("All") const [hoveredService,setHoveredService] = useState<string | null>(null) </string> </any>;";";''"
import { _useState } from 'react';,

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Cloud } from 'lucide-react';
import { Brain } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Check } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
const features = [];
const benefits = [];
const services = [];
const solutions = [];
; import { _motion } from 'framer-motionimport { _Link } from react-router-domimport {Brain,Shield,Cloud,Database,Globe,Zap,ArrowRight,Star,TrendingUp,Users,Clock,CheckCircle,Search} from lucide-reactexport const EnhancedServicesShowcase: Reac t.FC = () => { const _services = [{ title: AI Workflow Automation,' description: 'Transform business operations with intelligent automation that learns and scales,price: 'From $299/month,path: '/services/ai-workflow-automation,icon: GitFor k,category: 'AI & Automation,features: ['Process optimization,'AI-powered workflows','Real-time analytics','Scalable automation'],benefits: ['Reduce manual work by 70-85%,'Improve efficiency by 60%','Cut operational costs by 40-50%'],color: 'from-cyan-500 to-blue-600,glowColor: 'cyan'},{ title: 'AI Cybersecurity,description: 'Protect your business with AI-powered threat detection and prevention,price: 'From $499/month,path: '/services/ai-cybersecurity,icon: Shiel d,category: 'Security,features: ['Threat detection,'Behavioral analytics','Automated response','Compliance monitoring'],benefits: ['Detect threats 10x faster,'Reduce false positives by 85%','Prevent 99.9% of attacks'],color: 'from-purple-500 to-indigo-600,glowColor: 'purple'},{ title: 'Quantum Computing,description: 'Solve complex problems 1000x faster with quantum computing solutions,price: 'From $2,999/month',path: '/services/quantum-computing-solutions,icon: Ato m,category: 'Quantum Tech,features: ['Quantum algorithms,'ML acceleration','Financial modeling','Drug discovery'],benefits: ['1000x faster computation,'Breakthrough discoveries','Unbreakable encryption'],color: 'from-green-500 to-emerald-600,glowColor: 'green'},{ title: 'IoT Edge Computing,description: 'Process data at the edge and reduce latency by 90%,price: 'From $399/month,path: '/services/iot-edge-computing,icon: Cp u,category: 'IoT & Edge,features: ['Edge processing,'Device management','Real-time analytics','AI at the edge'],benefits: ['Reduce latency by 90%,'Cut bandwidth costs by 60-80%','Scale to millions of devices'],color: 'from-orange-500 to-red-600,glowColor: 'orange'},{ title: 'Cloud & DevOps,description: 'Build,deploy,and scale with enterprise-grade cloud infrastructure',price: 'From $799/month,path: '/services/cloud-devops,icon: Clou d,category: 'Infrastructure,features: ['Cloud migration,'CI/CD pipelines','Infrastructure as code','Monitoring & alerting'],benefits: ['Faster deployments,'Improved reliability','Cost optimization','Scalability'],color: 'from-blue-500 to-cyan-600,glowColor: 'blue'},{ title: 'AI Sales Copilot,description: 'Automate sales processes and boost conversion rates with AI,price: 'From _,500/month',path: '/services/ai-sales-copilot,icon: Brai n,category: 'Sales AI,features: ['Lead scoring,'CRM automation','Sales analytics','Predictive insights'],benefits: ['Reduce admin time by 40-60%,'Improve conversion rates','Shorten sales cycles'],color: 'from-pink-500 to-rose-600,glowColor: 'pink'}; ]; const _containerVariants = {; hidden: { opacity: 0 },; visible: {; opacity: 1,; transition: {; staggerChildren: 0.1} } } ;';'; const _categories = ['All','AI & Analytics','Quantum Computing','Cybersecurity','Cloud & DevOps','Data & Analytics','Blockchain & Web3'] ;';'; export default function EnhancedServicesShowcase(...args: unknow n[]): unknown { const [selectedCategory,setSelectedCategory] = useState<any>('All') const [hoveredService,setHoveredService] = useState<string | null>(null) </string> </any>;';';

