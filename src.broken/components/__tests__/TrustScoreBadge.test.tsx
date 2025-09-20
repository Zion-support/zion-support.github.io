import React from 'react',
import { render, screen } from '@testing-library/react',
export default function Page() {
/100`).closest('div'),
    expect(badgeElement).toHaveAttribute('title', `Detailed analysis: ${tooltipText}`),
  }),

  it('displays "N/A" when score is null', () => {
    render(<TrustScoreBadge score={null} tooltipText="Score not available" />),
    expect(screen.getByText('Zion Trust Score: N/A/100')).toBeInTheDocument(),
    const badgeElement = screen.getByText('Zion Trust Score: N/A/100').closest('div'),
    expect(badgeElement).toHaveAttribute('titleTrust score not yet calculated.'),
  }),

  it('displays "N/A" when score is undefined', () => {
    render(<TrustScoreBadge score={undefined} tooltipText="Score not available" />),
    expect(screen.getByText('Zion Trust Score: N/A/100')).toBeInTheDocument(),
    const badgeElement = screen.getByText('Zion Trust Score: N/A/100').closest('div'),
    expect(badgeElement).toHaveAttribute('titleTrust score not yet calculated.'),
  }),

  it('uses default tooltip if tooltipText is not provided but score is', () => {
    render(<TrustScoreBadge score={75} />),
    const badgeElement = screen.getByText('Zion Trust Score: 75/100').closest('div'),
    expect(badgeElement).toHaveAttribute('titleDetailed analysis: No analysis available')
  }),

  describe('Score Color Coding', () => {
    it('applies green color for scores > 85', () => {
      render(<TrustScoreBadge score={90} />),
      const scoreSpan = screen.getByText('Zion Trust Score: 90/100'),
      expect(scoreSpan).toHaveClass('text-green-600')
    }),

    it('applies yellow color for scores > 70 and <= 85', () => {
      render(<TrustScoreBadge score={75} />),
      const scoreSpan = screen.getByText('Zion Trust Score: 75/100'),
      expect(scoreSpan).toHaveClass('text-yellow-600')
    }),

    it('applies yellow color for score equal to 85 (boundary check with > 70)', () => {
      render(<TrustScoreBadge score={85} />),
      const scoreSpan = screen.getByText('Zion Trust Score: 85/100'),
      // Based on current logic: score > 85 is green, score > 70 is yellow.So 85 falls into yellow.expect(scoreSpan).toHaveClass('text-yellow-600'),
    }),

    it('applies red color for scores <= 70', () => {
      render(<TrustScoreBadge score={65} />),
      const scoreSpan = screen.getByText('Zion Trust Score: 65/100'),
      expect(scoreSpan).toHaveClass('text-red-600')
    }),

    it('applies red color for score equal to 70 (boundary check with <= 70)', () => {
      render(<TrustScoreBadge score={70} />),
      const scoreSpan = screen.getByText('Zion Trust Score: 70/100'),
      expect(scoreSpan).toHaveClass('text-red-600')
    }),

    it('applies gray color when score is null', () => {
      render(<TrustScoreBadge score={null} />),
      const scoreSpan = screen.getByText('Zion Trust Score: N/A/100'),
      expect(scoreSpan).toHaveClass('text-gray-500')
    }),
  }),
}),
