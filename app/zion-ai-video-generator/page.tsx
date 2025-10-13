import React, { useState, useRef, useCallback } from 'react';
import { Video, Play, Pause, Download, Upload, Settings, Wand2, Sparkles, Clock, FileVideo, Image, Music, Type, Palette, Zap } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';

const ZionAIVideoGenerator = () => {
  const [videoConfig, setVideoConfig] = useState({
    title: '',
    description: '',
    duration: 30,
    style: 'modern',
    aspectRatio: '16:9',
    resolution: '1080p',
    music: 'upbeat',
    voice: 'professional',
    language: 'en',
    subtitles: true,
    branding: true
  });

  const [isGenerating, setIsGenerating] = useState(false);
  const [generationProgress, setGenerationProgress] = useState(0);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const videoStyles = [
    { id: 'modern', name: 'Modern', description: 'Clean, contemporary design', color: 'from-blue-500 to-cyan-500' },
    { id: 'corporate', name: 'Corporate', description: 'Professional business style', color: 'from-gray-500 to-slate-500' },
    { id: 'creative', name: 'Creative', description: 'Artistic and dynamic', color: 'from-purple-500 to-pink-500' },
    { id: 'minimalist', name: 'Minimalist', description: 'Simple and elegant', color: 'from-green-500 to-emerald-500' },
    { id: 'futuristic', name: 'Futuristic', description: 'High-tech and sci-fi', color: 'from-cyan-500 to-purple-500' }
  ];

  const musicOptions = [
    { id: 'upbeat', name: 'Upbeat', description: 'Energetic and positive' },
    { id: 'calm', name: 'Calm', description: 'Relaxing and peaceful' },
    { id: 'corporate', name: 'Corporate', description: 'Professional and formal' },
    { id: 'dramatic', name: 'Dramatic', description: 'Intense and powerful' },
    { id: 'none', name: 'No Music', description: 'Silent video' }
  ];

  const voiceOptions = [
    { id: 'professional', name: 'Professional Male', description: 'Clear and authoritative' },
    { id: 'friendly', name: 'Friendly Female', description: 'Warm and approachable' },
    { id: 'energetic', name: 'Energetic', description: 'Dynamic and engaging' },
    { id: 'calm', name: 'Calm', description: 'Soothing and gentle' }
  ];

  const generateVideo = async () => {
    setIsGenerating(true);
    setGenerationProgress(0);
    
    // Simulate video generation progress
    const interval = setInterval(() => {
      setGenerationProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          setGeneratedVideo('https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4');
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // In a real implementation, this would upload the file
      console.log('File uploaded:', file.name);
    }
  };

  const downloadVideo = () => {
    if (generatedVideo) {
      const link = document.createElement('a');
      link.href = generatedVideo;
      link.download = `zion-video-${Date.now()}.mp4`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8">
      <EnhancedSEO
        title="Zion AI Video Generator - Create Professional Videos with AI | Zion Tech Group"
        description="Generate stunning videos instantly with our AI-powered video generator. Professional templates, automated editing, and smart content creation. Start creating today!"
        keywords="AI video generator, video creation, automated video editing, professional videos, video templates, AI content creation"
        canonical="https://ziontechgroup.com/zion-ai-video-generator"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Video className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Video Creation</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Zion AI Video Generator
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create professional videos in minutes with our intelligent AI-powered generator. 
            Automated editing, smart templates, and seamless content creation.
          </p>

          {/* Pricing */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-md mx-auto mb-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">$49<span className="text-lg text-gray-400">/month</span></div>
              <div className="text-gray-300 mb-4">Unlimited videos • AI-powered editing • Professional templates</div>
              <FuturisticButton variant="primary" size="lg" className="w-full">
                Start Free Trial
              </FuturisticButton>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Video Configuration */}
          <div>
            <FuturisticCard className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Settings className="w-6 h-6 mr-2 text-cyan-400" />
                Video Configuration
              </h2>

              {/* Basic Info */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Video Title</label>
                  <input
                    type="text"
                    value={videoConfig.title}
                    onChange={(e) => setVideoConfig(prev => ({ ...prev, title: e.target.value }))}
                    placeholder="Enter your video title"
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea
                    value={videoConfig.description}
                    onChange={(e) => setVideoConfig(prev => ({ ...prev, description: e.target.value }))}
                    placeholder="Describe your video content..."
                    rows={3}
                    className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Duration (seconds)</label>
                    <input
                      type="number"
                      value={videoConfig.duration}
                      onChange={(e) => setVideoConfig(prev => ({ ...prev, duration: parseInt(e.target.value) || 30 }))}
                      min="10"
                      max="300"
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Resolution</label>
                    <select
                      value={videoConfig.resolution}
                      onChange={(e) => setVideoConfig(prev => ({ ...prev, resolution: e.target.value }))}
                      className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="720p">720p HD</option>
                      <option value="1080p">1080p Full HD</option>
                      <option value="4k">4K Ultra HD</option>
                    </select>
                  </div>
                </div>

                {/* Video Style */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Video Style</label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {videoStyles.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setVideoConfig(prev => ({ ...prev, style: style.id }))}
                        className={`p-3 rounded-lg border transition-all ${
                          videoConfig.style === style.id
                            ? 'border-cyan-500 bg-cyan-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${style.color} mb-2`}></div>
                        <div className="text-left">
                          <div className="text-white font-medium text-sm">{style.name}</div>
                          <div className="text-gray-400 text-xs">{style.description}</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Music Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Background Music</label>
                  <div className="space-y-2">
                    {musicOptions.map((music) => (
                      <button
                        key={music.id}
                        onClick={() => setVideoConfig(prev => ({ ...prev, music: music.id }))}
                        className={`w-full p-3 rounded-lg border transition-all text-left ${
                          videoConfig.music === music.id
                            ? 'border-cyan-500 bg-cyan-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center">
                          <Music className="w-4 h-4 mr-3 text-cyan-400" />
                          <div>
                            <div className="text-white font-medium text-sm">{music.name}</div>
                            <div className="text-gray-400 text-xs">{music.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Voice Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-3">Voice Over</label>
                  <div className="space-y-2">
                    {voiceOptions.map((voice) => (
                      <button
                        key={voice.id}
                        onClick={() => setVideoConfig(prev => ({ ...prev, voice: voice.id }))}
                        className={`w-full p-3 rounded-lg border transition-all text-left ${
                          videoConfig.voice === voice.id
                            ? 'border-cyan-500 bg-cyan-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center">
                          <Type className="w-4 h-4 mr-3 text-cyan-400" />
                          <div>
                            <div className="text-white font-medium text-sm">{voice.name}</div>
                            <div className="text-gray-400 text-xs">{voice.description}</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Additional Options */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Palette className="w-5 h-5 mr-2 text-cyan-400" />
                      <span className="text-white">Custom Branding</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={videoConfig.branding}
                        onChange={(e) => setVideoConfig(prev => ({ ...prev, branding: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Type className="w-5 h-5 mr-2 text-cyan-400" />
                      <span className="text-white">Subtitles</span>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={videoConfig.subtitles}
                        onChange={(e) => setVideoConfig(prev => ({ ...prev, subtitles: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Upload Assets (Optional)</label>
                  <div
                    className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center hover:border-cyan-500/50 transition-colors cursor-pointer"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Click to upload images, videos, or audio files</p>
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*,video/*,audio/*"
                      onChange={handleFileUpload}
                      className="hidden"
                    />
                  </div>
                </div>
              </div>
            </FuturisticCard>
          </div>

          {/* Video Preview and Generation */}
          <div>
            <FuturisticCard className="p-6">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Video className="w-6 h-6 mr-2 text-cyan-400" />
                Video Preview
              </h2>

              {/* Video Player */}
              <div className="relative bg-black rounded-lg overflow-hidden mb-6">
                {generatedVideo ? (
                  <div className="relative">
                    <video
                      src={generatedVideo}
                      className="w-full h-64 object-cover"
                      controls={isPlaying}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <button
                        onClick={togglePlayback}
                        className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                      >
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="h-64 flex items-center justify-center">
                    <div className="text-center">
                      <Video className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-400">Your generated video will appear here</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Generation Progress */}
              {isGenerating && (
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white text-sm">Generating video...</span>
                    <span className="text-cyan-400 text-sm">{generationProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${generationProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="space-y-4">
                <FuturisticButton
                  variant="primary"
                  size="lg"
                  onClick={generateVideo}
                  disabled={isGenerating || !videoConfig.title}
                  className="w-full"
                >
                  {isGenerating ? (
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  ) : (
                    <Wand2 className="w-5 h-5 mr-2" />
                  )}
                  {isGenerating ? 'Generating Video...' : 'Generate Video'}
                </FuturisticButton>

                {generatedVideo && (
                  <div className="grid grid-cols-2 gap-4">
                    <FuturisticButton
                      variant="outline"
                      size="lg"
                      onClick={downloadVideo}
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Download
                    </FuturisticButton>
                    <FuturisticButton
                      variant="outline"
                      size="lg"
                      onClick={togglePlayback}
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 mr-2" />
                      ) : (
                        <Play className="w-5 h-5 mr-2" />
                      )}
                      {isPlaying ? 'Pause' : 'Play'}
                    </FuturisticButton>
                  </div>
                )}
              </div>

              {/* Video Stats */}
              <div className="mt-6 p-4 bg-white/5 rounded-lg">
                <h3 className="text-white font-semibold mb-3">Video Specifications</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white ml-2">{videoConfig.duration}s</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Resolution:</span>
                    <span className="text-white ml-2">{videoConfig.resolution}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Style:</span>
                    <span className="text-white ml-2 capitalize">{videoConfig.style}</span>
                  </div>
                  <div>
                    <span className="text-gray-400">Music:</span>
                    <span className="text-white ml-2 capitalize">{videoConfig.music}</span>
                  </div>
                </div>
              </div>
            </FuturisticCard>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Powerful AI Video Creation Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wand2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">AI-Powered Editing</h3>
              <p className="text-gray-300">Automated video editing with intelligent scene detection and smart transitions.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Professional Templates</h3>
              <p className="text-gray-300">Choose from hundreds of professionally designed video templates.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Lightning Fast</h3>
              <p className="text-gray-300">Generate high-quality videos in minutes, not hours.</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-cyan-900/30 to-purple-900/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of creators using our AI-powered video generator to produce professional content effortlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton variant="primary" size="lg">
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton variant="outline" size="lg">
                View Examples
              </FuturisticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZionAIVideoGenerator;
