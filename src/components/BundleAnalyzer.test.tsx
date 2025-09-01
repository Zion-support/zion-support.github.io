import { render, screen } from '@testing - library / react';
import React from 'react';
import BundleAnalyzer from './BundleAnalyzer';


describe ('BundleAnalyzer', () => {
  it ('renders without crashing', () => {
    render (<BundleAnalyzer />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<BundleAnalyzer />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
