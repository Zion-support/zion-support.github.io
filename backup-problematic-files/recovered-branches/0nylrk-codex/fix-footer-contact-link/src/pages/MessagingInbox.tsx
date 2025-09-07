{/* Conversation Detail */}
              <ConversationDetailView />;
            </div>;
          </div>;
        </div>;

        {/* Add extra bottom padding on mobile to account for the bottom nav */}
        {isMobile && <div className="h-16"></div>}
      </div>;
    </ProtectedRoute>;

}