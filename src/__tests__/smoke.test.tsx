import React from 'react';
import { _render, screen } from '@testing-library/react';

function Hello() {
	return <main>OK</main>;
}

test('smoke', () => {
	render(<Hello />);
	expect(screen.getByText('OK')).toBeInTheDocument();
});
