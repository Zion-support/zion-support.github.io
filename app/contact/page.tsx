import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle, Calendar, User, Building, MessageSquare, Target, Zap, Shield, Cloud, Brain, Code, Settings, Headphones, Globe, Award, Star, ArrowRight, Check, X, Plus, Minus, Search, Filter, Eye, EyeOff, Lock, Unlock, Download, Upload, RotateCcw, RotateCw, Maximize, Minimize, X as XIcon, Plus as PlusIcon, Minus as MinusIcon, Divide, Equal, Percent, Hash, AtSign, Euro, Pound, Yen, Bitcoin, Wallet, Banknote, Coins, Receipt, Archive, Folder, File, Image, Film, Headphones as Headphone, Mic, Speaker, Volume2, VolumeX, Play, Pause, Stop, SkipBack, SkipForward, Repeat, Shuffle, Radio, Tv, Tablet, Watch, Headphones as Headset, Gamepad2, Joystick, Mouse, Keyboard, Webcam, Wifi, Bluetooth, Usb, Hdmi, Ethernet, WifiOff, Signal, SignalZero, SignalLow, SignalMedium, SignalHigh, SignalFull, Send as SendIcon, Reply, Forward, Share, Copy, Paste, Cut, Save, Download as DownloadIcon, Upload as UploadIcon, RotateCcw as RotateCcwIcon, RotateCw as RotateCwIcon, Maximize as MaximizeIcon, Minimize as MinimizeIcon, X as XIcon2, Plus as PlusIcon2, Minus as MinusIcon2, Divide as DivideIcon, Equal as EqualIcon, Percent as PercentIcon, Hash as HashIcon, AtSign as AtSignIcon, Euro as EuroIcon, Pound as PoundIcon, Yen as YenIcon, Bitcoin as BitcoinIcon, Wallet as WalletIcon, Banknote as BanknoteIcon, Coins as CoinsIcon, Receipt as ReceiptIcon, Archive as ArchiveIcon, Folder as FolderIcon, File as FileIcon, Image as ImageIcon, Film as FilmIcon, Music, Headphones as HeadphoneIcon, Mic as Microphone, Speaker as SpeakerIcon, Volume2 as Volume2Icon, VolumeX as VolumeXIcon, Play as PlayIcon, Pause as PauseIcon, Stop as StopIcon, SkipBack as SkipBackIcon, SkipForward as SkipForwardIcon, Repeat as RepeatIcon, Shuffle as ShuffleIcon, Radio as RadioIcon, Tv as TvIcon, Monitor, Laptop, Printer, Key, AlertTriangle, Headphones as Headphone2, MessageSquare as Message, Calendar as CalendarIcon, FileText, Download as DownloadIcon2, Upload as UploadIcon2, RotateCcw as RotateCcwIcon2, RotateCw as RotateCwIcon2, Maximize as MaximizeIcon2, Minimize as MinimizeIcon2, X as XIcon3, Plus as PlusIcon3, Minus as MinusIcon3, Divide as DivideIcon2, Equal as EqualIcon2, Percent as PercentIcon2, Hash as HashIcon2, AtSign as AtSignIcon2, Euro as EuroIcon2, Pound as PoundIcon2, Yen as YenIcon2, Bitcoin as BitcoinIcon2, Wallet as WalletIcon2, Banknote as BanknoteIcon2, Coins as CoinsIcon2, Receipt as ReceiptIcon2, Archive as ArchiveIcon2, Folder as FolderIcon2, File as FileIcon2, Image as ImageIcon2, Film as FilmIcon2, Music as MusicIcon, Headphones as HeadphoneIcon2, Mic as MicrophoneIcon, Speaker as SpeakerIcon2, Volume2 as Volume2Icon2, VolumeX as VolumeXIcon2, Play as PlayIcon2, Pause as PauseIcon2, Stop as StopIcon2, SkipBack as SkipBackIcon2, SkipForward as SkipForwardIcon2, Repeat as RepeatIcon2, Shuffle as ShuffleIcon2, Radio as RadioIcon2, Tv as TvIcon2, Monitor as MonitorIcon, Laptop as LaptopIcon, Smartphone, Tablet, Watch as WatchIcon, Headphones as HeadsetIcon, Gamepad2 as Gamepad, Joystick as JoystickIcon, Mouse as MouseIcon, Keyboard as KeyboardIcon, Webcam as WebcamIcon, Wifi as WifiSignalIcon, Bluetooth as BluetoothIcon, Usb as UsbIcon, Hdmi as HdmiIcon, Ethernet as EthernetIcon, WifiOff as WifiOffSignalIcon, Signal as SignalIcon, SignalZero as Signal0Icon, SignalLow as Signal1Icon, SignalMedium as Signal2Icon, SignalHigh as Signal3Icon, SignalFull as Signal4Icon, Wifi as WifiIcon2, WifiOff as WifiOffIcon2, Loader2 } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    urgency: 'normal',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const services = [
    'AI Services',
    'Micro SaaS Solutions',
    'IT Support & Infrastructure',
    'Cloud Migration',
    'Cybersecurity',
    'Custom Development',
    'Consulting',
    'Other'
  ];

  const budgetRanges = [
    'Under $10,000',
    '$10,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $500,000',
    'Over $500,000',
    'Not sure'
  ];

  const urgencyLevels = [
    { value: 'urgent', label: 'Urgent (Within 1 week)', color: 'text-red-400' },
    { value: 'high', label: 'High (Within 2 weeks)', color: 'text-orange-400' },
    { value: 'normal', label: 'Normal (Within 1 month)', color: 'text-yellow-400' },
    { value: 'low', label: 'Low (Flexible timeline)', color: 'text-green-400' }
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
        urgency: 'normal',
        preferredContact: 'email'
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const contactInfo = {
    phone: '(302) 464-0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown, DE 19709',
    hours: 'Mon-Fri 9AM-6PM EST'
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Zion Tech Group | Get Your Free Consultation</title>
        <meta name="description" content="Contact Zion Tech Group for AI and IT solutions. Get a free consultation, schedule a call, or request a quote. We're here to help transform your business." />
        <meta name="keywords" content="contact, consultation, AI services, IT support, free quote, business transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Get Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Free Consultation</span>
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Ready to transform your business with AI and IT solutions? Let's discuss your needs and create a custom solution that drives results.
              </p>
            </div>
          </section>

          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>
                
                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-400">Thank you! We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center">
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-400">Something went wrong. Please try again or call us directly.</span>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-white mb-2">
                        Service Interest *
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="" className="bg-slate-800">Select a service</option>
                        {services.map((service) => (
                          <option key={service} value={service} className="bg-slate-800">
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-white mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      >
                        <option value="" className="bg-slate-800">Select budget range</option>
                        {budgetRanges.map((range) => (
                          <option key={range} value={range} className="bg-slate-800">
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="urgency" className="block text-sm font-medium text-white mb-2">
                      Project Urgency
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {urgencyLevels.map((level) => (
                        <label key={level.value} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 focus:ring-cyan-400"
                          />
                          <span className={`text-sm ${level.color}`}>{level.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="preferredContact" className="block text-sm font-medium text-white mb-2">
                      Preferred Contact Method
                    </label>
                    <div className="flex space-x-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="email"
                          checked={formData.preferredContact === 'email'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 focus:ring-cyan-400"
                        />
                        <span className="text-white">Email</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="preferredContact"
                          value="phone"
                          checked={formData.preferredContact === 'phone'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-cyan-400 bg-white/10 border-white/20 focus:ring-cyan-400"
                        />
                        <span className="text-white">Phone</span>
                      </label>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Project Details *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Information & Quick Actions */}
              <div className="space-y-8">
                {/* Contact Info */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Call Us</h3>
                        <a href={`tel:${contactInfo.phone}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          {contactInfo.phone}
                        </a>
                        <p className="text-sm text-gray-400">Available 24/7 for urgent issues</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Email Us</h3>
                        <a href={`mailto:${contactInfo.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                          {contactInfo.email}
                        </a>
                        <p className="text-sm text-gray-400">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Visit Us</h3>
                        <p className="text-cyan-400">{contactInfo.address}</p>
                        <p className="text-sm text-gray-400">By appointment only</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-white">Business Hours</h3>
                        <p className="text-cyan-400">{contactInfo.hours}</p>
                        <p className="text-sm text-gray-400">Emergency support available 24/7</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">Quick Actions</h2>
                  
                  <div className="space-y-4">
                    <a
                      href="tel:+13024640950"
                      className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Phone className="w-5 h-5 mr-2" />
                      Call Now for Immediate Help
                    </a>
                    
                    <a
                      href="/pricing"
                      className="w-full border-2 border-cyan-400 text-cyan-400 py-4 px-6 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      <Target className="w-5 h-5 mr-2" />
                      View Pricing Plans
                    </a>
                    
                    <a
                      href="/services"
                      className="w-full border-2 border-purple-400 text-purple-400 py-4 px-6 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                    >
                      <Settings className="w-5 h-5 mr-2" />
                      Explore Our Services
                    </a>
                  </div>
                </div>

                {/* Why Choose Us */}
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                  <h2 className="text-3xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Free Consultation</h3>
                        <p className="text-gray-300 text-sm">No obligation assessment of your needs</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Expert Team</h3>
                        <p className="text-gray-300 text-sm">20+ years of combined experience</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">Proven Results</h3>
                        <p className="text-gray-300 text-sm">300% average ROI for our clients</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-lg font-semibold text-white">24/7 Support</h3>
                        <p className="text-gray-300 text-sm">Round-the-clock assistance when you need it</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-12 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't wait to start your digital transformation. Contact us today and let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Us Now
                </a>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;