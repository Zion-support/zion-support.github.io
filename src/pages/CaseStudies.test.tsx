<<<<<<< HEAD
import React from 'react';""
import { render, screen } from '@testing-library/react';""
import '@testing-library/jest-dom';""
import CaseStudies from './CaseStudies';
""
describe('CaseStudies', () => {""
  it('renders without crashing', () => {
    render(<CaseStudies /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();, });
""
  it('displays expected content', () => {
    render(<CaseStudies /" >);"
    // Add more specific tests here, });, });
""
=======
<<<<<<< HEAD
describe('CaseStudies', () => {}' it('renders without crashing', () => {} render(<CaseStudies />) '; expect(screen.getByRole ('main') || screen.getByText(/.*/) ) .toBeInTheDocument () }) ' it('displays expected content', () => {} render(<CaseStudies />) '
=======
import React from 'react
import { render, screen } from '@testing-library/react
import '@testing-library/jest-dom
import CaseStudies from './CaseStudies
describe('CaseStudies', () => {"
  it('renders without crashing', () => {
    render(<CaseStudies /" >);"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
})
"
  it('displays expected content', () => {
    render(<CaseStudies /" >)
    // Add more specific tests here
});
})
"
>>>>>>> main
>>>>>>> main
