import { render, screen } from '@testing - library / react';
import React from 'react';
import SitemapGenerator from './SitemapGenerator';

describe ('SitemapGenerator', () => {
  it ('renders without crashing', () => {
    render (<SitemapGenerator />) ;
    expect (screen.getByRole ('main') || screen.getByText (/.*/) ) .toBeInTheDocument () ;
  }) ;

  it ('displays expected content', () => {
    render (<SitemapGenerator />) ;
    // Add specific test assertions based on component content
  }) ;
}) ;
