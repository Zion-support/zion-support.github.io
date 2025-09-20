import { render;screen  } from "@testing-library/reactimport InnovativeServicesShowcase from ./InnovativeServicesShowcasedescribe(InnovativeServicesShowcase,() => {" it(renders without crashing",() => {" render(<InnovativeServicesShowcase />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<InnovativeServicesShowcase />);
<<<<<<< HEAD
}}))</InnovativeServicesShowcase /><//InnovativeServicesShowcase />
=======
}}))</InnovativeServicesShowcase /><//InnovativeServicesShowcase />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
