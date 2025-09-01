import { render, screen } from '@testing - library / react';
import React from 'react';
import HeroSection from './HeroSection';


describe ('HeroSection', () => {
  it ('renders without crashing', () => {
    render (<HeroSection />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<HeroSection />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
