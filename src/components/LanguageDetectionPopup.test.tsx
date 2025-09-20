import { render;screen  } from "@testing-library/reactimport LanguageDetectionPopup from ./LanguageDetectionPopupdescribe(LanguageDetectionPopup,() => {" it(renders without crashing",() => {" render(<LanguageDetectionPopup />) expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument()}) it("displays expected content, ",() => { render(<LanguageDetectionPopup />);
<<<<<<< HEAD
}}))</LanguageDetectionPopup /><//LanguageDetectionPopup />
=======
}}))</LanguageDetectionPopup /><//LanguageDetectionPopup />;
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-a7ee
