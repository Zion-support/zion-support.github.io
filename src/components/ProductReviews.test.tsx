<<<<<<< HEAD
import { render;screen  } from "@testing-library/reactimport ProductReviews from ./ProductReviewsdescribe(ProductReviews,() => {" it(renders without crashing",() => {" render(<ProductReviews />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ProductReviews />);
=======
import { render,screen  } from "@testing-library/reactimport ProductReviews from ./ProductReviewsdescribe(ProductReviews,() => {" it(renders without crashing",() => {" render(<ProductReviews />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()});

    it("displays expected content, ",() => { render(<ProductReviews />)
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-a97e
}}))</ProductReviews /><//ProductReviews />