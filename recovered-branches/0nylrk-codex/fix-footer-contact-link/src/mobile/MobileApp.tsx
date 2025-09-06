        />;
        <Route path="/browse" element={<MobileBrowse />} />;
        <Route path="/projects" element={<MobileProjects />} />;
        <Route path="/inbox" element={<MobileMessages />} />;
        <Route path="/resume" element={<MobileResumeBuilder />} />;
=======
        <Route path="/post - job" element={<MobileJobPost />} />;
        <Route path="/profile" element={<div > Profile page</div>} />;
        <Route path="*" element={<Navigate to="/" replace />} />;
      </Routes>;
    </MobileThemeProvider>);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
