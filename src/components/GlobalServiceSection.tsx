import React from "react";

export function GlobalServiceSection() {
  return (
    <section className='py-20 bg-zion-blue' id='global-services'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <GradientHeading>Global IT Services</GradientHeading>
          <p className='mt-4 text-zion-slate-light text-xl max-w-2xl mx-auto'>
            Our 24x7x365 global IT service offering provides enterprise-grade,
solutions for businesses of all sizes
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {services.map((service index) => (
            <div