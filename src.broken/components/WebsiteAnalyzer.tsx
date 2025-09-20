import React, { useState, useEffect } from 'react';
export const WebsiteAnalyzer: React.FC = () : JSX.Element => {
export default WebsiteAnalyzer;
import { CheckCircle, import { LinkChecker, LinkInfo, PageInfo } from '../utils / linkChecker';

export default function Page() {
 catch(error) {
`
          // console.error(`Error analyzing ${page}:`, error)}

        // Add delay to prevent overwhelming the server
        await new Promise(resolve => setTimeout (resolve, 100) ) }

      setAnalysisResult({

        summary,
        pages: results,
        brokenLinks,
        missingPages
      }) } catch(error) {

      // console.error('Analysis failed:', error)} finally {

      setIsAnalyzing(false);
      setProgress(100);
      setCurrentPage('')}
  };

    a.href = url;
    a.download = 'zion-website-analysis.json';
              )}
              {isAnalyzing ? 'Analyzing...' : 'Start Analysis'}

              <div  className="bg-green - 50 p - 4 rounded-lg border border-green -200">
                <div  className="flex items -center">
                  <CheckCircle className="w-8 h-8 text-green - 600 mr-3" />
                  <div>
                    <p className="text-2xl font - bold text-green -900">

              <div  className="bg-red - 50 p - 4 rounded-lg border border-red -200">
                <div  className="flex items -center">
                  <XCircle className="w-8 h-8 text-red - 600 mr-3" />
                  <div>
                    <p className="text-2xl font - bold text-red -900">{analysisResult.summary.brokenLinks}</p>
                    <p className="text-sm text-red -700">Broken Links</p>
                  </div>
                </div>
              </div>

              <div  className="bg-yellow-50 p - 4 rounded-lg border border-yellow-200">
                <div  className="flex items -center">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 mr-3" />
                  <div>
                    <p className="text-2xl font - bold text-yellow-900">{analysisResult.summary.missingPages}</p>
                    <p className="text-sm text-yellow-700">Missing Pages</p>
