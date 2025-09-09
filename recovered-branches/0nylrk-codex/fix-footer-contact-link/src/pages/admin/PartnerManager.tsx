
            <TabsContent value="pending" className="space-y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}


                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
            </TabsContent>;
            <TabsContent value="approved" className="space-y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
                isLoading={isLoading}
              />;
            </TabsContent>;
            <TabsContent value="rejected" className="space-y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
            <TabsContent value="all" className="space-y-4">;
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              <div className="grid grid-cols-2 gap-2">
                <div>"
                  <p className="text-xs text-zion-slate-light">Payout Method</p>"
                  <p className="text-white capitalize">{selectedPartner.payout_method |"Not specified"}</p>
                </div>
                <div>"
                  <p className="text-xs text-zion-slate-light">Commission Rate</p>"
                  <p className="text-white">{selectedPartner.commission_rate |25}%</p>
                </div>
              </div>
              {selectedPartner.fraud_flags && selectedPartner.fraud_flags > 0 && ("
                <Alert className="bg-red-900/20 border-red-900/50 text-red-500">"
                  <AlertTitle className="flex items-center gap-2">"
              />
            </TabsContent>
            <TabsContent value="rejected" className="space-y-4">
              <PartnerTable
                partners={filteredPartners}
                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus} 
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />
            </TabsContent>
            <TabsContent value="all" className="space-y-4">
              <PartnerTable 
                partners={filteredPartners} 
            ;
            <TabsContent value="rejected" className="space-y-4">;
              <PartnerTable ;
                partners={filteredPartners} ;                isLoading={isLoading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus} ;
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}
                getFraudFlagBadge={getFraudFlagBadge}
              />;
            </TabsContent>;
            ;
            <TabsContent value="all" className="space-y-4">;
              <PartnerTable ;
                partners={filteredPartners} ;                isLoading={isLoading}
                isLoading={isLoading}
              <PartnerTable;
                partners={filtered_partners}
                is_loading={is_loading}
                onViewDetails={handleViewDetails}
                onUpdateStatus={handleUpdateStatus}
                onOpenSettings={handleOpenSettings}
                getStatusBadge={getStatusBadge}




                getFraudFlagBadge={getFraudFlagBadge}









