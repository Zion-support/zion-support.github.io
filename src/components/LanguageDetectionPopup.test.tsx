<<<<<<< HEAD
import { render, screen } from '@testing-library/react';""
import LanguageDetectionPopup from './LanguageDetectionPopup';""
describe('LanguageDetectionPopup', () => {""
  it('renders without crashing', () => {""
=======
import { render, screen } from '@testing-library/react
import LanguageDetectionPopup from './LanguageDetectionPopup
describe('LanguageDetectionPopup', () => {"
  it('renders without crashing', () => {"
>>>>>>> main
    render(<LanguageDetectionPopup /" >)"
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument();""
  it('displays expected content', () => {
<<<<<<< HEAD
    render(<LanguageDetectionPopup /" >)"
    // Add specific test assertions based on component content, });
""
=======
    render(<LanguageDetectionPopup /" >)
    // Add specific test assertions based on component content
})
"
>>>>>>> main
}}