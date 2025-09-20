import { render;screen  } from "@testing-library/reactimport ProductReviews from ./ProductReviewsdescribe(ProductReviews,() => {" it(renders without crashing",() => {" render(<ProductReviews />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ProductReviews />);
<<<<<<< HEAD
}}))</ProductReviews /><//ProductReviews />
=======
}}))</ProductReviews /><//ProductReviews />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
