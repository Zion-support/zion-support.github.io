import React, { useState } from 'react';
import Head from 'next/head';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { Link, Copy, BarChart3, ArrowRight, RefreshCw, CheckCircle, ExternalLink, QrCode, Settings, Trash2 } from 'lucide-react';
};

export default function URLShortenerPage() {
  const [longUrl, setLongUrl] = useState('');
  const [customAlias, setCustomAlias] = useState('');
  const [shortenedUrls, setShortenedUrls] = useState<any[]>([]);
  const [isShortening, setIsShortening] = useState(false);
  const [showQR, setShowQR] = useState<string | null>(null);
  const generateShortUrl = async () => {
    if (!longUrl.trim()) return;
    setIsShortening(true);
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    const alias = customAlias.trim() || generateRandomAlias();
    const shortUrl = `https://zion.tech/${alias}`;
    const newShortUrl = {
      id: Date.now(),
      longUrl: longUrl.trim(),
      shortUrl,
      alias,
      clicks: 0,
      createdAt: new Date().toISOString(),
      qrCode: `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(shortUrl)}`
    };
    setShortenedUrls(prev => [newShortUrl, ...prev]);
    setLongUrl('');
    setCustomAlias('');
    setIsShortening(false);
  };
  const generateRandomAlias = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };
  const incrementClicks = (id: number) => {
    setShortenedUrls(prev => 
      prev.map(url => 
        url.id === id ? { ...url, clicks: url.clicks + 1 } : url
      )
    );
};
  };
  const deleteUrl = (id: number) => {
    setShortenedUrls(prev => prev.filter(url => url.id !== id));
  };
  const getTotalClicks = () => {
    return shortenedUrls.reduce((sum, url) => sum + url.clicks, 0);
  };
  const getTotalUrls = () => {
    return shortenedUrls.length;
  };
  return (
    <>
      <Head>
        <title>URL Shortener - Zion Tech Group</title>
        <meta name="description" content="Create short, memorable URLs with our professional URL shortening service. Track clicks, generate QR codes, and manage your links efficiently." />
        <meta property="og:title" content="URL Shortener - Zion Tech Group" />
        <meta property="og:description" content="Professional URL shortening service with analytics and QR code generation." />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-orange-900 via-red-900 to-pink-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 text-orange-300 text-sm font-medium mb-6">
              <Link className="w-4 h-4 mr-2" />
              Professional URL Shortening
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            URL Shortener
          <p className="text-xl text-orange-200 max-w-4xl mx-auto leading-relaxed">
            Transform long URLs into short, memorable links with our professional shortening service. 
            Track clicks, generate QR codes, and manage your links efficiently with advanced analytics.
      {/* URL Shortening Tool */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Create Short URLs Instantly
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our advanced shortening engine creates professional, trackable links in seconds.
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Input Form */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Link className="w-6 h-6 mr-3 text-orange-400" />
                URL Shortening
              <div className="space-y-6">
                {/* Long URL Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Long URL
                  <input
                    type="url"
                    value={longUrl}
                    onChange={(e) => setLongUrl(e.target.value)}
                    placeholder="https://example.com/very-long-url-that-needs-shortening"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                {/* Custom Alias */}
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Custom Alias (Optional)
                  <div className="flex space-x-2">
                    <span className="inline-flex items-center px-3 py-3 bg-gray-600 border border-gray-500 rounded-l-lg text-gray-300 text-sm">
                      zion.tech/
                    <input
                      type="text"
                      value={customAlias}
                      onChange={(e) => setCustomAlias(e.target.value)}
                      placeholder="my-custom-link"
                      className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-r-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    />
                  <p className="text-xs text-gray-400 mt-1">
                    Leave empty for auto-generated alias
                <Button
                  onClick={generateShortUrl}
                  disabled={!longUrl.trim() || isShortening}
                  className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isShortening ? (
                    <>
                      <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                      Creating Short URL...
                    </>
                  ) : (
                    <>
                      <Link className="w-5 h-5 mr-2" />
                      Create Short URL
                    </>
                  )}
                <div className="text-sm text-gray-400">
                  <p>• Professional, branded short URLs</p>
                  <p>• Click tracking and analytics</p>
                  <p>• QR code generation</p>
                  <p>• Custom aliases available</p>
            {/* Statistics */}
            <Card className="p-8 bg-gray-800 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <BarChart3 className="w-6 h-6 mr-3 text-red-400" />
                Your Statistics
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-orange-400 mb-2">
                      {getTotalUrls()}
                    <div className="text-sm text-gray-400">Total URLs</div>
                  <div className="text-center p-4 bg-gray-700 rounded-lg">
                    <div className="text-3xl font-bold text-red-400 mb-2">
                      {getTotalClicks()}
                    <div className="text-sm text-gray-400">Total Clicks</div>
                {shortenedUrls.length === 0 ? (
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700 text-center">
                    <div className="text-6xl mb-4">📊</div>
                    <p className="text-gray-400">
                      Your URL statistics will appear here. Create your first short URL to get started.
                ) : (
                  <div className="space-y-3">
                    <h4 className="text-lg font-semibold text-white mb-3">Recent URLs</h4>
                    {shortenedUrls.slice(0, 3).map((url) => (
                      <div key={url.id} className="p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between">
                          <div className="flex-1 min-w-0">
                            <div className="text-sm text-orange-400 font-medium truncate">
                              {url.shortUrl}
                            <div className="text-xs text-gray-400 truncate">
                              {url.longUrl}
                          <div className="text-right ml-3">
                            <div className="text-sm text-white font-medium">
                              {url.clicks} clicks
                    ))}
                )}
      {/* Shortened URLs List */}
      {shortenedUrls.length > 0 && (
        <section className="py-20 bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Your Shortened URLs
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Manage and track all your shortened URLs in one place.
            <div className="space-y-4">
              {shortenedUrls.map((url) => (
                <Card key={url.id} className="p-6 bg-gray-700 border border-gray-600">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* URL Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">
                              {url.shortUrl}
                            <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
                              Active
                          <p className="text-gray-400 text-sm break-all">
                            {url.longUrl}
                          <div className="flex items-center space-x-4 mt-3 text-sm text-gray-400">
                            <span>Created: {new Date(url.createdAt).toLocaleDateString()}</span>
                            <span>Alias: {url.alias}</span>
                    {/* Actions and Stats */}
                    <div className="flex flex-col space-y-3">
                      <div className="text-center p-4 bg-gray-800 rounded-lg">
                        <div className="text-2xl font-bold text-orange-400 mb-1">
                          {url.clicks}
                        <div className="text-xs text-gray-400">Total Clicks</div>
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => copyToClipboard(url.shortUrl)}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <Copy className="w-4 h-4 mr-2" />
                          Copy
                        <Button
                          onClick={() => incrementClicks(url.id)}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit
                      <div className="flex space-x-2">
                        <Button
                          onClick={() => setShowQR(showQR === url.id ? null : url.id)}
                          variant="outline"
                          size="sm"
                          className="flex-1 border-gray-600 text-gray-300 hover:bg-gray-600"
                        >
                          <QrCode className="w-4 h-4 mr-2" />
                          QR Code
                        <Button
                          onClick={() => deleteUrl(url.id)}
                          variant="outline"
                          size="sm"
                          className="border-red-600 text-red-400 hover:bg-red-600 hover:text-white"
                        >
                          <Trash2 className="w-4 h-4" />
                  {/* QR Code */}
                  {showQR === url.id && (
                    <div className="mt-4 p-4 bg-gray-800 rounded-lg text-center">
                      <img 
                        src={url.qrCode} 
                        alt="QR Code" 
                        className="mx-auto mb-3 w-32 h-32"
                      />
                      <p className="text-sm text-gray-400">
                        Scan this QR code to visit the shortened URL
                  )}
              ))}
      )}
      {/* Features */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Professional URL Shortening Features
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create, manage, and track your shortened URLs effectively.
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔗</div>
              <h3 className="text-xl font-bold text-white mb-4">Custom Aliases</h3>
              <p className="text-gray-400">
                Create memorable, branded short URLs with custom aliases that reflect your brand.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-white mb-4">Click Analytics</h3>
              <p className="text-gray-400">
                Track clicks, engagement, and performance metrics for all your shortened URLs.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-bold text-white mb-4">QR Code Generation</h3>
              <p className="text-gray-400">
                Generate QR codes for easy sharing and mobile access to your shortened URLs.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-white mb-4">Secure & Reliable</h3>
              <p className="text-gray-400">
                Enterprise-grade infrastructure ensures your URLs are always accessible and secure.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-white mb-4">Fast Performance</h3>
              <p className="text-gray-400">
                Lightning-fast redirects with global CDN for optimal user experience worldwide.
            <Card className="text-center p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-white mb-4">Easy Management</h3>
              <p className="text-gray-400">
                Simple dashboard to manage, edit, and delete your shortened URLs as needed.
      {/* Use Cases */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Perfect For Every Business Need
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From marketing campaigns to social media, our URL shortener serves all your link management needs.
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Marketing Campaigns</h3>
              <p className="text-gray-400 mb-6">
                Create trackable links for email marketing, social media campaigns, and advertising to measure ROI and engagement.
              <ul className="space-y-2 text-gray-300">
                <li>• Track campaign performance</li>
                <li>• Measure click-through rates</li>
                <li>• Optimize marketing strategies</li>
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-2xl font-bold text-white mb-4">Social Media</h3>
              <p className="text-gray-400 mb-6">
                Share concise, professional links on social platforms with built-in analytics to understand audience engagement.
              <ul className="space-y-2 text-gray-300">
                <li>• Professional appearance</li>
                <li>• Engagement tracking</li>
                <li>• Brand consistency</li>
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-white mb-4">Email Marketing</h3>
              <p className="text-gray-400 mb-6">
                Include short, trackable URLs in newsletters and promotional emails to monitor subscriber engagement.
              <ul className="space-y-2 text-gray-300">
                <li>• Clean email design</li>
                <li>• Subscriber analytics</li>
                <li>• A/B testing support</li>
            <Card className="p-8 bg-gray-700 border border-gray-600">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-2xl font-bold text-white mb-4">Business Presentations</h3>
              <p className="text-gray-400 mb-6">
                Use short URLs in presentations, business cards, and printed materials for easy access and tracking.
              <ul className="space-y-2 text-gray-300">
                <li>• Professional branding</li>
                <li>• Easy sharing</li>
                <li>• Access tracking</li>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Shorten Your URLs?
          <p className="text-xl text-orange-100 mb-8">
            Join thousands of businesses using our professional URL shortening service to improve their link management.
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/contact"
              size="lg"
              className="bg-white text-orange-600 hover:bg-gray-100"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            <Button
              href="/pricing"
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-orange-600"
            >
              View Pricing
    </>
  );

export default url-shortener;