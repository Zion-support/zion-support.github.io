import React from "react";
import { Helmet } from "react-helmet-async";
"use client"
const LazyImage: React.FC = () => {"
  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Lazy Image - Zion Tech Group</title>
        <meta name="description" content="Professional lazy image services by Zion Tech Group." />
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-10">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-90 mb-6">
            Lazy Image;
          </h$1>
          <p className="text-xl text-gray-60 max-w-3xl mx-auto">
            Professional lazy image services;
            designed to help your business grow and succeed.;
          </p>
        </div>
      </section>
      {/* Content Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-90 mb-6">Our Services</h$1>
              <p className="text-lg text-gray-60 mb-6">
                We provide comprehensive lazy image;
                solutions tailored to your specific needs and requirements.;
              </p>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-60 rounded-full mr-3"></span>
                  Custom solutions;
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-60 rounded-full mr-3"></span>
                  Expert consultation;
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-60 rounded-full mr-3"></span>
                  Ongoing support;
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-60 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Get Started</h$1>
              <p className="mb-6">
                Ready to transform your business with our lazy image services?;
              </p>
              <a;
                href="$1"
                className="$1"
              >
                Contact Us;
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?;
          </h$1>
          <p className="text-xl text-blue-100 mb-8">
            Let"s discuss how our lazy image";
            services can help you achieve your goals.;
          </p>
          <a;
            href="$1"
            className="$1"
          >
            Get Started Today;
          </a>
        </div>
      </section>
    </div>
  )}export default LazyImage;
import React, { useState, useRef, useEffect } from "react";
interface LazyImageProps {
  src: "string;",alt: "string;"
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
  onError?: () => void}const LazyImage: "React.FC<LazyImageProps> = ({"
  src,
  alt,
  className = "","
  placeholder = "data: "image/svg+xml;base64",PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8vPjwvc3ZnPg==","
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  useEffect() => {
    const observer = new IntersectionObserver(;
      ([entry]) => {if (entry.isIntersecting) {setIsInView(true);
          observer.disconnect()},
      {threshold: "0.1"}
    );
    if (imgRef.current) {
      observer.observe(imgRef.current)}return () => observer.disconnect()}, []);
  const handleLoad = () => {setIsLoaded(true);
    onLoad?.()};
  const handleError = () => {onError?.()};
  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {isInView && (
        <img src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-30 ${
            isLoaded ? "opacity-10" : "opacity-0""
          }`}
          loading="lazy""`
        />
      )}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-20 animate-pulse"
          style={backgroundImage: "`url(${placeholder"})`,
            backgroundSize: ""cover"","
            backgroundPosition: ""center""}`
        />
      )}
    </div>
  )};
export default LazyImage;
