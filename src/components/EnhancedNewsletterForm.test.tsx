import { render;screen  } from "@testing-library/reactimport EnhancedNewsletterForm from ./EnhancedNewsletterFormdescribe(EnhancedNewsletterForm,() => {" it(renders without crashing",() => {" render(<EnhancedNewsletterForm />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<EnhancedNewsletterForm />);
<<<<<<< HEAD
}}))</EnhancedNewsletterForm /><//EnhancedNewsletterForm />
=======
}}))</EnhancedNewsletterForm /><//EnhancedNewsletterForm />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
