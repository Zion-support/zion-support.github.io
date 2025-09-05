<<<<<<< HEAD
>>>>>>> 0aea86df97524e9f0bb14202f48b4e4eee196229
import _React from 'react';  import '@testing-library/jest-dom'; import Headerdynamic from '../components/Header.dynamic'; describe('Headerdynamic',() => { test('renders without crashing',() => { render(<Headerdynamic />); expect(screen.getByTestId('header.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Headerdynamic />)}); test('handles user interactions',() => { render(<Headerdynamic />)}); test('applies correct styling',() => { render(<Headerdynamic />)})});
>>>>>>> d0b4cabda824e2db66cecb53192832d7e749a326
=======
import _React from 'react';  import '@testing-library/jest-dom'; import Headerdynamic from '../components/Header.dynamic'; describe('Headerdynamic',() => { test('renders without crashing',() => { render(<Headerdynamic />); expect(screen.getByTestId('header.dynamic')).toBeInTheDocument()}); test('displays correct content',() => { render(<Headerdynamic />)}); test('handles user interactions',() => { render(<Headerdynamic />)}); test('applies correct styling',() => { render(<Headerdynamic />)})});
>>>>>>> 10f43844f89f81084ca8fdce546c59c985174e68
