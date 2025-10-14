<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
'use client''
const LazyImage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">"
=======
import React from "react";

const LazyImage = () => {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-white">
>>>>>>> origin/main
      <Helmet>
        <title>Lazy Image - Zion Tech Group</title>
        <meta name="description" content="Professional lazy image services by Zion Tech Group." />"
      </Helmet>
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">"
        <div className="max-w-6xl mx-auto text-center">"
          <h1 className="text-5xl font-bold text-gray-900 mb-6">"
            Lazy Image;
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional lazy image services;
            designed to help your business grow and succeed.;
          </p>
        </div>
      </section>
      { /* Content Section */ }
            Lazy Image</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">"
            Professional lazy image services
<<<<<<< HEAD
            designed to help your business grow and succeed.</p></div></section>{/* Content Section */}
      <section className="py-16 px-4">"
        <div className="max-w-6xl mx-auto">"
          <div className="grid md:grid-cols-2 gap-12 items-center">"
=======
            designed to help your business grow and succeed.</p></div></section>{ /* Content Section */ }
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
>>>>>>> origin/main
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>"
              <p className="text-lg text-gray-600 mb-6">"
                We provide comprehensive lazy image;
                solutions tailored to your specific needs and requirements.;
              </p>
              <ul className="space-y-3">"
                <li className="flex items-center">"
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Custom solutions;
                </li>
                <li className="flex items-center">"
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Expert consultation;
                </li>
                <li className="flex items-center">"
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Ongoing support;
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">"
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>"
              <p className="mb-6">"
                Ready to transform your business with our lazy image services?;
              </p>
              <a;
                href="$1""
                className="$1""
              >
                Contact Us;
              </a>
            </div>
          </div>
        </div>
      </section>
<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">"
        <div className="max-w-4xl mx-auto text-center">"
          <h2 className="text-3xl font-bold text-white mb-6">"
=======
      { /* CTA Section */ }
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
>>>>>>> origin/main
            Ready to Get Started?;
          </h2>
          <p className="text-xl text-blue-100 mb-8">"
            Let"s discuss how our lazy image"
            services can help you achieve your goals.;
          </p>
          <a;
            href="$1""
            className="$1""
          >
            Get Started Today;
          </a>
        </div>
      </section>
    </div>
  )
export default LazyImage;
                We provide comprehensive lazy image
                solutions tailored to your specific needs and requirements.</p>
              <ul className="space-y-3">"
                <li className="flex items-center">"
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Custom solutions</li>
                <li className="flex items-center">"
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Expert consultation</li>
                <li className="flex items-center">"
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>"
                  Ongoing support</li></ul></div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">"
              <h3 className="text-2xl font-bold mb-4">Get Started</h3>"
              <p className="mb-6">"
                Ready to transform your business with our lazy image services?</p>
              <a
<<<<<<< HEAD
                href="/contact""
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">"
                Contact Us</a></div></div></div></section>{/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600">"
        <div className="max-w-4xl mx-auto text-center">"
          <h2 className="text-3xl font-bold text-white mb-6">"
=======
                href="/contact"
                className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors">
                Contact Us</a></div></div></div></section>{ /* CTA Section */ }
      <section className="py-16 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
>>>>>>> origin/main
            Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-8">"
            Let's discuss how our lazy image''
            services can help you achieve your goals.</p>
          <a
            href="/contact""
            className="inline-block bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors">"
            Get Started Today</a></div></section></div>
  )
export default LazyImage
<<<<<<< HEAD
import React, { useState, useRef, useEffect } from 'react";
interface LazyImageProps {src: string;
=======
import React, { useState, useRef, useEffect } from 'react';
interface LazyImageProps { src: string;
>>>>>>> origin/main
  alt: string;
  className?: string;
  placeholder?: string;
  onLoad?: () => void;
<<<<<<< HEAD
  onError?: () => void}
=======
  onError?: () => void; }
>>>>>>> origin/main
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '','
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8vPjwvc3ZnPg==','
  onLoad,
  onError
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
      },
      { threshold: 0.1 }
<<<<<<< HEAD
    if (imgRef.current) {
      observer.observe(imgRef.current)
    return () => observer.disconnect()
  }, [])
=======
    );
    if (imgRef.current) { observer.observe(imgRef.current); }
    return () => observer.disconnect();
  }, []);
>>>>>>> origin/main
  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  const handleError = () => {
    onError?.()
  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>`
      {isInView && (
        <img
          src={src}
<<<<<<< HEAD
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-300 ${`
            isLoaded ? 'opacity-100' : 'opacity-0''
          }`}`
          loading="lazy""
=======
          alt={ alt }
          onLoad={ handleLoad }
          onError={ handleError }
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
>>>>>>> origin/main
        />
      )
      {!isLoaded && (
        <div
          className="absolute inset-0 bg-gray-200 animate-pulse""
          style={{
<<<<<<< HEAD
            backgroundImage: `url(${placeholder})`,`
            backgroundSize: 'cover','
            backgroundPosition: 'center''
          }
=======
            backgroundImage: `url(${placeholder})`,
            backgroundSize: "cover",
            backgroundPosition: "center" }}
>>>>>>> origin/main
        />
      )
    </div>
<<<<<<< HEAD
  )
export default LazyImage;
=======
  );
};
=======
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-2">LazyImage</h2>
      <p>This component is under construction.</p>
    </div>
  );
};

>>>>>>> origin/main
export default LazyImage;
>>>>>>> origin/main
