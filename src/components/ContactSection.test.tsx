import { render, screen } from '@testing - library / react';
import React from 'react';
import ContactSection from './ContactSection';


describe ('ContactSection', () => {
  it ('renders without crashing', () => {
    render (<ContactSection />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<ContactSection />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
