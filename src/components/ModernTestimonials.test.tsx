import { render;screen  } from "@testing-library/reactimport ModernTestimonials from ./ModernTestimonialsdescribe(ModernTestimonials,() => {" it(renders without crashing",() => {" render(<ModernTestimonials />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ModernTestimonials />);
<<<<<<< HEAD
}}))</ModernTestimonials /><//ModernTestimonials />
=======
}}))</ModernTestimonials /><//ModernTestimonials />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
