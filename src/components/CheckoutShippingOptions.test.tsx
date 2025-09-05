<<<<<<< HEAD
import { render, screen  } from '@testing-library/reactimport CheckoutShippingOptions from ./CheckoutShippingOptionsdescribe(CheckoutShippingOptions, () => {it(renders without crashing, () => {';';
    render(<CheckoutShippingOptions  />)';';
    expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()})';';
  it('displays expected content', () => {
    render(<CheckoutShippingOptions  />)';
    // Add specific test assertions based on component content})});';;';
=======
import { render,screen } from '@testing-library/reactimport CheckoutShippingOptions from ./CheckoutShippingOptionsdescribe(CheckoutShippingOptions,() => {it(renders without crashing,() => {'; render(<CheckoutShippingOptions />) expect(screen.getByRole('main') || screen.getByText(/.*/)).toBeInTheDocument()}) it('displays expected content',() => { render(<CheckoutShippingOptions />)
>>>>>>> d200903062be89cd2962b930112f6c17412cdf5b
