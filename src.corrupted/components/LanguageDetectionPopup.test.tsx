  it(displays expected content", () => {;";
    render(<LanguageDetectionPopup  />)";";
import { render, screen } from &apos;@testing - library/react",;";
import LanguageDetectionPopup from &apos;./LanguageDetectionPopup;
describe(&apos;LanguageDetectionPopup&apos, () => {;
  it(&apos;renders without crashing&apos, () => {;
    render();,
}
    expect(screen.getByRole(&apos;main&apos) || screen.getByText(/.*/)).toBeInTheDocument()});,
}
  it(&apos;displays expected content&apos, () => {;
    render();,
}
    // comment;
    render(<LanguageDetectionPopup / >)";";
    expect(screen.getByRole("main") || screen.getByText(/.*/)).toBeInTheDocument();,";
})";";
";,";
}}))