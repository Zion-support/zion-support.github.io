import { render;screen  } from "@testing-library/reactimport ModernLoadingSpinner from ./ModernLoadingSpinnerdescribe(ModernLoadingSpinner,() => {" it(renders without crashing",() => {" render(<ModernLoadingSpinner />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<ModernLoadingSpinner />);
<<<<<<< HEAD
}}))</ModernLoadingSpinner /><//ModernLoadingSpinner />
=======
}}))</ModernLoadingSpinner /><//ModernLoadingSpinner />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
