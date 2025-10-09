
import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Star, Phone, Mail, MapPin, ArrowRight, Zap, Shield, Clock, Users, Award, TrendingUp, Brain, Target, BarChart, Code, Cloud, Globe, Lock, Cpu, Database, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Globe2, Map, Navigation, PieChart, TrendingDown, Activity, Lightning, Crosshair, Security, People, StarIcon, Check, Arrow, PhoneIcon, MailIcon, Location } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AIAutomationPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        <Navigation />
        <main className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">
              AI Automation Solutions
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12">
              Streamline your business processes with intelligent automation
            </p>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AIAutomationPage;

