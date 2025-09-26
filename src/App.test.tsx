import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  test('renders the main heading', () => {
    render(<App />);
    const heading = screen.getAllByText(/Zion Tech Group/i)[0];
    expect(heading).toBeInTheDocument();
  });

  test('renders the welcome message', () => {
    render(<App />);
    const welcomeText = screen.getByText(/Welcome to/i);
    expect(welcomeText).toBeInTheDocument();
  });

  test('renders the main description', () => {
    render(<App />);
    const description = screen.getByText(/We specialize in AI, blockchain, quantum computing, and enterprise software development/i);
    expect(description).toBeInTheDocument();
  });

  test('renders Get Started button', () => {
    render(<App />);
    const getStartedButtons = screen.getAllByText(/Get Started/i);
    expect(getStartedButtons[0]).toBeInTheDocument();
  });

  test('renders Learn More button', () => {
    render(<App />);
    const learnMoreButton = screen.getByText(/Learn More/i);
    expect(learnMoreButton).toBeInTheDocument();
  });

  test('renders core technologies section', () => {
    render(<App />);
    const coreTechHeading = screen.getByText(/Our Core Technologies/i);
    expect(coreTechHeading).toBeInTheDocument();
  });

  test('renders AI-Powered Solutions feature', () => {
    render(<App />);
    const aiFeature = screen.getByText(/AI-Powered Solutions/i);
    expect(aiFeature).toBeInTheDocument();
  });

  test('renders Blockchain Technology feature', () => {
    render(<App />);
    const blockchainFeatures = screen.getAllByText(/Blockchain Technology/i);
    expect(blockchainFeatures[0]).toBeInTheDocument();
  });

  test('renders Cloud Infrastructure feature', () => {
    render(<App />);
    const cloudFeatures = screen.getAllByText(/Cloud Infrastructure/i);
    expect(cloudFeatures[0]).toBeInTheDocument();
  });

  test('renders Quantum Computing feature', () => {
    render(<App />);
    const quantumFeatures = screen.getAllByText(/Quantum Computing/i);
    expect(quantumFeatures[0]).toBeInTheDocument();
  });
});