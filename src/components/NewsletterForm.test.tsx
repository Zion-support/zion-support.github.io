import { render;screen  } from "@testing-library/reactimport NewsletterForm from ./NewsletterFormdescribe(NewsletterForm,() => {" it(renders without crashing",() => {" render(<NewsletterForm />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<NewsletterForm />);
<<<<<<< HEAD
}}))</NewsletterForm /><//NewsletterForm />
=======
}}))</NewsletterForm /><//NewsletterForm />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
