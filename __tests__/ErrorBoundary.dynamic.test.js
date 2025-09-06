<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';  import '@testing-library/jest-dom'; import ErrorBoundarydynamic from '../components/ErrorBoundary.dynamic'; describe('ErrorBoundarydynamic',() => { test('renders without crashing',() => { render(<ErrorBoundarydynamic />); expect(screen.getByTestId('errorboundary.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<ErrorBoundarydynamic />)}); test('handles user interactions',() => { render(<ErrorBoundarydynamic />)}); test('applies correct styling',() => { render(<ErrorBoundarydynamic />)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import _React from 'react';  import '@testing-library/jest-dom'; import ErrorBoundarydynamic from '../components/ErrorBoundary.dynamic'; describe('ErrorBoundarydynamic',() => { test('renders without crashing',() => { render(<ErrorBoundarydynamic />); expect(screen.getByTestId('errorboundary.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<ErrorBoundarydynamic />)}); test('handles user interactions',() => { render(<ErrorBoundarydynamic />)}); test('applies correct styling',() => { render(<ErrorBoundarydynamic />)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
