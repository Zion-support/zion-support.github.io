import { render, screen } from '@testing-library/react';
import TalentProfile from './TalentProfile';
describe('TalentProfile', () => {
  it('renders without crashing', () => {
    render(<TalentProfile />)""
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();
  it('displays expected content', () => {
    render(<TalentProfile />)
    // Add specific test assertions based on component content
  });
